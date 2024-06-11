"use client";
import { SectionWrapper } from "@/components/HigherOrderComponents";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";




const Data = [
  {
    title: "Pioneering Innovation",
    points: [
      "At AiiQ, innovation drives us. We explore new AI frontiers, delivering forward-thinking solutions to keep our clients ahead in technology."
    ],
  },
  {
    title: "Built on Trust",
    points: [
      "Trust is paramount at AiiQ. We build lasting client relationships through mutual respect, reliability, and transparency.",
    ],
  },
  {
    title: "Commitment to Excellence",
    points: [
      "Excellence at AiiQ is a standard. Our expert team and superior AI solutions ensure our clients receive unparalleled service.",
    ],
  },
];


type TimelineCardProps = {
  data: (typeof Data)[0];
  animate: boolean
};

const TimelineCard = ({ data, animate }: TimelineCardProps,) => {
  return (
    <VerticalTimelineElement
      visible={animate}
      contentStyle={{
        background: 'transparent',
        boxShadow: 'none'
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: 'black', color: '#fff' }}
    >
      <div className="w-full green-pink-gradient p-px rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12  flex justify-evenly items-center flex-col" style={{ backgroundColor: 'black' }}>
          <div>
            <h3 className="text-white text-[24px] font-bold">{data.title}</h3>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {data.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {



  const [animationVisible, setAnimationVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimationVisible(true);
        }
      });
    }, {
      threshold: 0.5
    });

    const section = document.querySelector("#timeline");
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="timeline">
      <div className="pt-20 flex flex-col" style={{ backgroundColor: 'black' }}>
        <VerticalTimeline>
          {Data.map((experience, index) => (
            <TimelineCard
              animate={animationVisible}
              key={`experience-${index}`}
              data={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Timeline, "timeline") 
