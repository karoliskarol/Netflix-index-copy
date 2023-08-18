const MiddleSection = props => {
    props = {
        ...{
            direction: 'flex-row',
            title: 'Enjoy on your TV',
            subtitle: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
            src: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
        },
        ...props
    }

    return (
        <section className="middle-section grey-top-border">
            <div className="container">
                <div className={"row " + props.direction}>
                    <div className="col-6 d-flex justify-content-center flex-column">
                        <div className="middle-section-title mb-2">
                            {props.title}
                        </div>
                        <div className="middle-section-title-2">
                            {props.subtitle}
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={props.src} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MiddleSection;