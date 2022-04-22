import styles from '../styles/footer.module.scss'

export default function Footer() {
    return (
        <nav className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr/>
                    </div>
                    <div className="col-12">
                        <a className={styles.logo} href="https://www.launchart.io/" target="_blank">LaunchArt</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}