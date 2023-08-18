const GetStarted = ({ classes }) => {
    classes = !classes ? '' : classes;

    return (
        <div className={classes}>
            <h2 className="home-title-3 mt-4">Ready to watch? Enter your email to create or restart your membership.</h2>

            <div className="d-flex get-started justify-content-center">
                <input placeholder="Email address" />
                <button className="d-flex align-items-center">
                    <span>Get Started</span>
                    <i class="bi bi-caret-right"></i>
                </button>
            </div>
        </div>
    );
}

export default GetStarted;