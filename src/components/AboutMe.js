import React from "react";
import owner from "../mydisplaypic.jpeg";

const AboutMe = () => {
    return (
        <div  style={{background:"grey"}}>
        <div id="aboutId" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className ="profile-img" src={owner} alt="owner"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutme-heading">about me</h1>
                    <p style={{color:"white"}}>     
                    Hello, My name is Akhil Kondabathini.
                    I am a Software Developer with over 3 years of professional experience.
                    I come from computer science background with Master's Degree and
I am currently specializing on building RESTful services.

I am passionate about building excellent software 
that improves the lives of those around me.


My past contributions include building web applications and web forms
by using Front end technologies such as React js, Angular, HTML5, CSS, Bootstrap, javascript.

My expertise include efficient Problem Solving, optimal usage of Data Structures in Algorithms.

I am currently looking for advancements in my career where I could meet some
really smart people and have productive conversations
where I could contribute on the biggest platforms 
and build some cool stuff that will be used by millions if not thousands.

So, What would you do if you had a software expert
available at your fingertips?


                    </p>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default AboutMe
