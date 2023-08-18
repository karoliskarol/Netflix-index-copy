import ChangeLanguage from "./ChangeLanguage";

const Footer = () => {
    return (
        <footer className="grey-top-border">
            <div className="container mt-5">
                <a href="javascript:void(0)" className="mb-4">Questions? Contact us.</a>

                <div className="row mb-3">
                    <div className="col-4">
                    <a href="javascript:void(0)" className="mb-3 my-1">FAQ</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Media Center</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Ways to watch</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Cookie Preferences</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Speed Test</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Only on Netflix</a>
                    </div>
                    <div className="col-4">
                    <a href="javascript:void(0)" className="mb-3 my-1">Help Center</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Investor Relations</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Terms of Use</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Corporate Information</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Legal Guarantee</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Ad Choices</a>
                    </div>
                    <div className="col-4">
                    <a href="javascript:void(0)" className="mb-3 my-1">Account</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Jobs</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Privacy</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Contact Us</a>
                    <a href="javascript:void(0)" className="mb-3 my-1">Legal Notices</a>
                    </div>
                </div>

                <ChangeLanguage />

                <p className="netflix-lithuania mt-3 mb-5">Netflix Lithuania</p>
                 
            </div>
        </footer>
    );
}

export default Footer;