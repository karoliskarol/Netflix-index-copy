import Accordion from 'react-bootstrap/Accordion';
import Question from './Question';
import GetStarted from '../../GetStarted';

const FAQ = () => {
    return (
        <section className="grey-top-border">
            <div className="container">
                <div className="title text-center mt-5 mb-2">
                    Frequently Asked Questions
                </div>
                <Accordion defaultActiveKey="0">
                    <Question
                        k="1"
                        q="What is Netflix?"
                        a="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
                    />

                    <Question
                        k="2"
                        q="How much does Netflix cost?"
                        a="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts."
                    />

                    <Question
                        k="3"
                        q="Where can i watch?"
                        a="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
                    />

                    <Question
                        k="4"
                        q="How do i cancel?"
                        a="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
                    />

                    <Question
                        k="5"
                        q="What can i watch on Netflix?"
                        a="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
                    />

                    <Question
                        k="6"
                        q="Is Netflix good for kids?"
                        a="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
                    />

                    <Question
                        k="7"
                        q="Why am i seeing this language?"
                        a="Your browser preferences determine the language shown here."
                    />
                </Accordion>

                <GetStarted classes="text-center mt-2 mb-5" /> 
            </div>
        </section>
    );
}

export default FAQ;