import React from "react";

const Timeline = () => {
  return (
    <div id="timelineId" className="timeline">
      <div className="d-flex justify-content-center my-5">
        <h1>timeline</h1>
      </div>
      <div className="container timeline-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>1993</h3>
            <p>Born on April 2nd 1993 at Karimnagar, Telangana, India.</p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>1996-2000</h3>
            <p>
              Started schooling at Jyothishmathi school from kindergarten to
              second grade in Karimnagar, Telangana, India.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2000-2001</h3>
            <p>
              Started schooling at St. Pauls English Medium School for third
              grade in Godavarikhani, Telangana, India.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2001-2008</h3>
            <p>
              Started schooling at Saint Claire High School from fourth grade to
              tenth grade in NTPC, Godavarikhani, Telangana, India.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2008-2010</h3>
            <p>
              Started Intermediate at Narayana Educational Institute for class
              XI and XII in Hyderabad, Telangana, India.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2010-2014</h3>
            <p>
              Started Bachelors of Engineering in Information Technology in
              Osmania University affiliated MVSR college in Hyderabad, India and
              graduated in June 2014 with 3.2 .
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2017</h3>
            <p>
              Started Masters education in Computer Science in University of
              Houston-Clearlake, Houston, Texas, USA and graduated in May 2017
              with 3.2 gpa.
            </p>
          </div>
        </div>

        {/* - */}

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2018</h3>
            <p>
              Started internship as Web Software Developer from jan 2017 at
              Primary care center for clearlake and then Started working as a
              Programmer Analyst from Sep 2017 at Saibersys Inc in Carrolton,
              Texas.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2020</h3>
            <p>
              Started Working as Software Developer at IMCS Group Inc in Irving,
              Texas from March 2018 and then in August 2018 started working at
              their client's company First Command Financial Services in
              FortWorth, texas.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>
              Working on some side projects and focussing on improving problem
              solving skills as well as developing strong foundataion in
              DataStructures and Algorithms. Joined coding club Bootcamp in Dec
              2020 for two months.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-2022</h3>
            <p>
              Started Working remotely as Staff Software Engineer at National
              Instruments and then contracted through SpanIdea Systems. Upgraded  
              RFmx API Code and Document Generation tools in C# 
              from July 2021 to January 2022 .
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2022-2022</h3>
            <p>
              Worked at Exxon Mobil Contract through VCIT Solutions as Software Developer (Remote), Developing API’s using C#, 
              .NET and Front end using Angular and react and Using Azure DevOps for agile and CI/CD and Azure for different
               environments of development, acceptance, production from January 2022 to June 2022.
            </p>
          </div>
        </div>

         <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2022-present</h3>
            <p>
              Started Working as an Associate Software Engineer at Goldman Sachs in Dallas, Texas. from July 2022. Responsibilities include
              Creating new workflow processes within Fund space to help onboard new fund launches like GS Public Funds,State education funds,
              S&P 500 Buffered funds. Processing GS public funds’ performance data from various upstreams such as MorningStar, Lipper etc, and 
              generating Monthly and Daily JSON’s to display on GSAM.com.Enhancing Internal tools for optimal performances 
              which reduces the workload for the users. 
            </p>        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
