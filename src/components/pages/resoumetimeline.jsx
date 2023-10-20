import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaceTwoTone } from '@mui/icons-material';
import { SignLanguageOutlined } from '@mui/icons-material';
const MYtimeline = () => {
  return (
    <VerticalTimeline lineColor='#fff'>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#4C7D9F', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #4C7D9F' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaceTwoTone />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: "text.primary"  }}
        contentArrowStyle={{ borderRight: '7px solid #999' }}
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: "text.primary"  }}
        icon={<SignLanguageOutlined />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: 'text.primary' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: '#999', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: 'InfoText' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}

        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: '#999', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: 'WindowText' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}

        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: '#999', color: 'text.primary' }}
        icon={<SignLanguageOutlined />}

      >
        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>
          Strategy, Social Media
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}

        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: '#999', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>
          Creative Direction, User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}

        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: '#999', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>
          Creative Direction, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}

        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: '#999', color: '#fff' }}
      >

        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>
          Creative Direction, Visual Design
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}
export default MYtimeline;
