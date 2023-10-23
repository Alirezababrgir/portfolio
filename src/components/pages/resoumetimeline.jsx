import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Alarm, Dangerous, FaceTwoTone, Laptop } from '@mui/icons-material';
import { SignLanguageOutlined } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { InsertEmoticonRounded,School,InfoRounded,TerminalRounded,TrendingDownRounded,CurrencyBitcoinOutlined,HubRounded,WbIncandescentRounded,HandymanRounded,NetworkPingRounded,LightRounded} from '@mui/icons-material';
import {
  SiSolidity,
  SiNodedotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiRedux,
  SiMongodb,
  SiJavascript,
  SiMaterialdesign,
  SiBootstrap,
  SiTailwindcss,
  SiLinux,
  SiIntellijidea,
  SiMysql,
  SiNextdotjs,
  SiWeb3Dotjs,
  SiAlchemy,
  SiVisualstudiocode,

} from "react-icons/si";
const MYtimeline = () => {
  return (
    <VerticalTimeline lineColor='#111'>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#4C7D9F', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #4C7D9F' }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<InsertEmoticonRounded />}
      >
        <h3 className="vertical-timeline-element-title"> از گچ کاری  تا  بلاکچین</h3>
        <h4 className="vertical-timeline-element-subtitle">مرور ۱۰ سال</h4>
        <p>
          اسکرول کنید تا با رزومه من به اهمیت دانش پی ببرید
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: "#999", color: "text.primary"  }}
        contentArrowStyle={{ borderRight: '7px solid #999' }}
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: "text.primary"  }}
        icon={<School/>}
      >
        <h3 className="vertical-timeline-element-title"> ترک تحصیل</h3>
        <h4 className="vertical-timeline-element-subtitle">دیپلم تجربی</h4>
        <p>
          خیلی زود علارقم علاقه به تحصیل بخاطر شرایط مالی با مدرک دیپلم تجربی ترک تحصیل کردم
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: 'text.primary' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: '#999', color: '#fff' }}
        icon={<HandymanRounded/>}
      >
        <h3 className="vertical-timeline-element-title">کارگری ساختمان </h3>
        <h4 className="vertical-timeline-element-subtitle"> گچ کاری</h4>
        <p>
مجبور بودم برای کمک به خانواده کارگری کنم
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: 'InfoText' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        icon={<HubRounded/>}
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: '#999', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">پا دویی و بازاریابی </h3>
        <h4 className="vertical-timeline-element-subtitle">پا دویی بازار و بازاریابی شبکه ای</h4>
        <p>
          توسط یکی از دوستانم به یکی از شرکتهای بازاریابی شبکه ای معرفی شدم و بعد از مدتی توسط همون شخص به بازاریابی کردن برای پارچه معرفی شدم و بعد از دوسال تونستم با سفر کردن به شهر های مختلف مشتری قابل توجهی بدست بیارم و بعد بهمراه یکی از اشناها تو بازار تهران تونستم تو ۲۲ سالگی تو بازار اصلی مغازه باز کنم همراه با کلی مشتری بلقوه از سراسر ایران
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: 'WindowText' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        icon={<TrendingDownRounded/>}
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: '#999', color: 'text.primary' }}

      >
        <h3 className="vertical-timeline-element-title">سقوط</h3>
        <h4 className="vertical-timeline-element-subtitle">تحریم و اعتماد</h4>
        <p>
          خیلی زود تحریم های امریکا علیه ایران شروع شد و بازار ازاد تو کما برای همیشه فرو رفت و فیلترینگ شبکه های اجتماعی و قطع ارتباط ما با مشتری ها هم به این موضوع دامن زد تا دلیلی بر شونه خالی کردن شریکم زیر کرایه سنگین مغازه بشه و درنهایت من دموندم و من با کلی بدهی و شکست سنگین از اعتماد به اشنا و پارچه هایی که کسی حاظر نبود حتی زیر قیت تولید بخره
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        icon={<WbIncandescentRounded/>}
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: '#999', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">بازگشت</h3>
        <h4 className="vertical-timeline-element-subtitle">اما نه به شکل قبل</h4>
        <p>
         بعد از تحویل مغازه بازار طلبکار ها به سراغم اومدن و همزمان به چند دادگاه ارجا شدم همون حین یکی از اشناها یک بازار یابی بهم معرفی کرد که اینبار فرق داشت پلتفرم ان توسط قراد داد هوشمند کنترل و تضمین میشد و پاداش ان به صورت رمزارز بین بازاریاب ها داده میشد همان هنگام بقول معروف لامپم روشن شد ارررره خودشه همونه که میخواستم . من محو قدرت بلاکچین شده بودم چون نه تنها تحریم بلکه مشکل اعتماد هم میشه توسط قرارداد هوشمند تضمین کرد دیگه هیچ چیز نمیتونه هیچجوره کسب و کارمو تهدید کنه . این همون چیزی بود که میخواستم یعنی امنیت شغلی و خوشبختانه تونستم از فعالیت در همین بازاریابی پول طلبکارهارو پرداخت کنم و رضایت اونارو جلب کنم
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#999', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        icon={<TerminalRounded/>}
        iconStyle={{ background: '#999', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">برنامه نویسی</h3>
        <h4 className="vertical-timeline-element-subtitle">بدون وقت تلف کردن</h4>
        <p>
          بسیار  زیاد درمورد بلاکچین و قراردادهای هوشمند بدون خستگی ماه ها مطالعه کردم و رفته رفته حیرت زده تر میشدم تا متوجه شدم باید خودم دست بکار بشم و کسب و کارمو بصورت قرارداد هوشمند روی بلاکچین بنویسم و شروع کردم به اموزش دیدن
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
