import React from 'react';
import pfp from '../../assets/images/pfp.png';

function About() {
    return (
        <section className="my-5">
            <img src={pfp} className="my-3 pfp" alt="profile"/>
            <h1 id="about">Who Am I?</h1>
            <div className="my-2">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                    condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                    mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                    Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                    justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                    dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                    Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                </p>
            </div>
        </section>
    );
}

export default About;