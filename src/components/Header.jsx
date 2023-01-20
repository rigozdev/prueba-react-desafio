// import lolLogo from '.../logoLol.svg'
const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="https://www.leagueoflegends.com/es-mx/">
                            <img src="logoLol.svg" width={'150px'} alt="lolLogo" />
                        </a>
                        
                        <form className="d-flex" role="search">
                            <button className="button-52 button-nav" role="button" type="submit" disabled>Disabled button</button>
                            <button className="button-52 button-nav" role="button" type="submit" disabled>Disabled button</button>
                        </form>
                    </div>
                </nav>
            </header>

        </>


    )
}

export default Header;