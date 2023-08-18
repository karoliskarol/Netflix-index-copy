import ChangeLanguage from "../ChangeLanguage";

const Nav = () => {
    return (
        <nav className="d-flex">
            <ChangeLanguage />
            <div className="sign-in-button">
                Sign in
            </div>
        </nav>
    );
}

export default Nav;