import React from "react";
import "./Apply.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FiInbox, FiCloud, FiDatabase } from "react-icons/fi";
import 'react-vertical-timeline-component/style.min.css';


const slidesData = [
  [
    "Intern | Cloud Computing",
    "Future Ready Talent",
    "Learned about Microsoft Azure, Cloud Computing, Power BI. Created an internship project Health-QnA using Azure Bot service, QnA maker, Static web apps and HTML, CSS. Finally rewarded with Internship certification by Future Ready Talent.",
    "March 2022 - Aug 2022",
  ],
  [
    "Intern | Data Analyst",
    "IBM SkillsBuild",
    "Learned about Microsoft Azure, Cloud Computing, Power BI. Created an internship project Health-QnA using Azure Bot service, QnA maker, Static web apps and HTML, CSS. Finally rewarded with Internship certification by Future Ready Talent.",
    "March 2022 - Current",
  ],
];

export default function Experience() {
  return (
    <div>
      <div className="experience" id="experience" style={{marginTop:"20rem"}}>
        <h3 className="subhead">experience</h3>

        {/* <div className="vertical-timeline"> */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#17181d", color: "#fff", boxShadow: "18px 18px 25px 12px rgba(0, 0, 0, 0.2)"}}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={slidesData[0][3]}
            
            iconStyle={{ background: "#17181d", color: "#fff" }}
            icon={<FiCloud />}
          >
            <h3 className="vertical-timeline-element-title"style={{fontWeight:"500"}}>
            {slidesData[0][1]}
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{fontWeight:"300"}}>
            {slidesData[0][0]}
              </h4>
            <p style={{fontWeight:"200"}}>
            {slidesData[0][2]}

            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#17181d", color: "#fff", boxShadow: "18px 18px 25px 12px rgba(0, 0, 0, 0.2)" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff",  }}
            date={slidesData[1][3]}
            iconStyle={{ background: "#17181d", color: "#fff" }}
            icon={<FiDatabase />}

            >
            <h3 className="vertical-timeline-element-title" style={{fontWeight:"500"}}>
            {slidesData[1][1]}
              
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{fontWeight:"300"}}>
            {slidesData[1][0]}

            </h4>
            <p style={{fontWeight:"200"}}>
            {slidesData[1][2]}
              </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {/* </div> */}


      </div>
    </div>
  );
}
