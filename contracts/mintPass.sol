// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";


contract mintPass is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;


    bytes32 public GOLDEN_ROOT; // who can mint?
    bytes32 public SILVER_ROOT; // who can mint?
    
    
    bool public IS_SALE_ACTIVE = false; // can we mint?
    
    uint public constant MAX_SUPPLY = 9999; //  MAX_SUPPLY - My mintPass = number of siblings of my mintPass

    uint constant NUMBER_OF_TOKENS_ALLOWED_PER_ADDRESS = 5; // How many can I mint from this mintPass?
        
    mapping (address => uint256) addressToMintCount; // how many mint passes do i have

    mapping (uint256 => bool) IS_GOLD; // gold pass if token id is true , silver pass if not

    string GOLD_BASE_URI;
    string SILVER_BASE_URI;

    /*
    @Person: Will bots be able to mint?

    @return: No. 
    */
    modifier onlyAccounts () {
        require(msg.sender == tx.origin, "Not allowed origin");
        _;
    }
    
    error InvalidMerkleProof();

    constructor(string memory name, string memory symbol, string memory _GOLD_BASE_URI,string memory _SILVER_BASE_URI,bytes32 _GOLDEN_ROOT,bytes32
     _SILVER_ROOT )
    ERC721(name, symbol)
    {
        GOLD_BASE_URI = _GOLD_BASE_URI;
        SILVER_BASE_URI = _SILVER_BASE_URI;

        GOLDEN_ROOT = _GOLDEN_ROOT;
        SILVER_ROOT = _SILVER_ROOT;
        _tokenIdCounter.increment();
    }
    
    function isGold(uint256 tokenId) external view returns(bool) {
        return IS_GOLD[tokenId];
    }

    function burn(uint256 tokenId) external virtual {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "caller is not owner nor approved");
        _burn(tokenId);
        _tokenIdCounter.decrement();
    }

    function setMerkleGoldenRoot(bytes32 _GOLDEN_ROOT) 
    onlyOwner 
    public 
    {
        GOLDEN_ROOT = _GOLDEN_ROOT;
    }

    function setMerkleSilverRoot(bytes32 _SILVER_ROOT) 
    onlyOwner 
    public 
    {
        SILVER_ROOT = _SILVER_ROOT;
    }

    function setGoldenBaseURI(string memory newUri) 
    public 
    onlyOwner {
        GOLD_BASE_URI = newUri;
    }

    function setSilverBaseURI(string memory newUri) 
    public 
    onlyOwner {
        SILVER_BASE_URI = newUri;
    }

    function toggleSale() public 
    onlyOwner 
    {
        IS_SALE_ACTIVE = !IS_SALE_ACTIVE;
    }
  
    function ownerMint(uint numberOfTokens, bool _isGold) 
    public 
    onlyOwner {
        uint current = _tokenIdCounter.current();
        require(current + numberOfTokens < MAX_SUPPLY, "Exceeds total supply");

        for (uint i = 0; i < numberOfTokens; i++) {
            mintPrivate(_isGold);
        }
    }

    function privateSale(uint256 allowance,uint256 quantity, bytes32[] calldata proof)
    public
    onlyAccounts
    {
        require(IS_SALE_ACTIVE, "Privatesale haven't started");
        require(addressToMintCount[msg.sender] + quantity <= allowance, "Exceeds allowance");
        uint current = _tokenIdCounter.current();
        require(current < MAX_SUPPLY, "Exceeds total supply");

        if (checkGoldenMerkle(proof,allowance)){
            for(uint i; i< quantity; i++){
                mintPrivate(true);
            }
        }else if(checkSilverMerkle(proof,allowance)){
            for(uint i; i< quantity; i++){
                mintPrivate(false);
            }
        }else{
            revert InvalidMerkleProof();
        }
        
    }

    function mintPrivate(bool _checkGold) internal {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        IS_GOLD[tokenId] = _checkGold;
        addressToMintCount[msg.sender]++;
        _mint(msg.sender, tokenId);
    }

    function tokensOfOwner(address _owner) external view returns(uint256[] memory ) {
        uint256 tokenCount = balanceOf(_owner);
        if (tokenCount == 0) {
            return new uint256[](0);
        } else {
            uint256[] memory result = new uint256[](tokenCount);
            for (uint256 i; i < tokenCount; i++) {
                result[i] = tokenOfOwnerByIndex(_owner, i);

            }

            return result;
        }
    }

    function checkGoldenMerkle (bytes32[] calldata proof,uint256 quantity) internal view returns(bool)
    {   

        return MerkleProof.verify(proof, GOLDEN_ROOT, _leaf(msg.sender, quantity));
    }

    function checkSilverMerkle (bytes32[] calldata proof,uint256 quantity) internal view returns(bool)
    {   
                return MerkleProof.verify(proof, SILVER_ROOT, _leaf(msg.sender, quantity));

    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
      {
        require(
          _exists(tokenId),
          "ERC721Metadata: URI query for nonexistent token"
        );
        if(IS_GOLD[tokenId]){
            return GOLD_BASE_URI;
        }else{
            return SILVER_BASE_URI;
        }
                
      }
       

    function totalSupply() public override view returns (uint) {
        return _tokenIdCounter.current() - 1;
    }

    function _leaf(address account, uint256 allowance)
    internal pure returns (bytes32)
    {
         return keccak256(abi.encodePacked(allowance,account));
    }

    function _verify(bytes32 leaf, bytes32[] memory proof, bytes32 root)
    internal pure returns (bool)
    {
        return MerkleProof.verify(proof, root, leaf);
    }
}