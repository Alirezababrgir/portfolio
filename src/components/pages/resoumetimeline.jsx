import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@emotion/react';
import { InsertEmoticonRounded, School,  TerminalRounded, TrendingDownRounded,  HubRounded, WbIncandescentRounded, HandymanRounded} from '@mui/icons-material';
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
  SiTarget

} from "react-icons/si";
import { blue, green, grey, orange, red, yellow } from '@mui/material/colors';

const MYtimeline = () => {

  const mytheme = useTheme()

  return (
    <VerticalTimeline lineColor='#fff'>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ backgroundColor: "#4c7d9f" }}
        contentArrowStyle={{ borderRight: '7px solid  #4C7D9F' }}
        iconStyle={{ background:  mytheme.palette.mode === "dark" ? blue[800] : blue[500], color: mytheme.palette.mode === "dark" ? grey[200] : grey[800]}}
        icon={<SiTarget/>}
      >
        <h3 className="vertical-timeline-element-title"> از گچ کاری  تا امنیت بلاکچین</h3>
        <h4 className="vertical-timeline-element-subtitle">مرور ۱۰ سال</h4>
        <p>
          اسکرول کنید تا با رزومه من به اهمیت دانش پی ببرید
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: mytheme.palette.mode === "dark" ? grey[800] : "#999", color: mytheme.palette.mode === "dark" ? grey[200] : grey[800] }}
        contentArrowStyle={{ borderRight: '7px solid #999' }}
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: '#999', color: blue[900] }}
        icon={<School />}
      >
        <h3 className="vertical-timeline-element-title"> ترک تحصیل</h3>
        <h4 className="vertical-timeline-element-subtitle">دیپلم تجربی</h4>
        <p>
          خیلی زود علارقم علاقه به تحصیل بخاطر شرایط مالی با مدرک دیپلم تجربی ترک تحصیل کردم
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: mytheme.palette.mode === "dark" ? grey[800] : "#999", color: mytheme.palette.mode === "dark" ? grey[200] : grey[800] }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: '#999', color:yellow[600] }}
        icon={<HandymanRounded />}
      >
        <h3 className="vertical-timeline-element-title">کارگری ساختمان </h3>
        <h4 className="vertical-timeline-element-subtitle"> گچ کاری</h4>
        <p>
          مجبور بودم برای کمک به خانواده کارگری کنم
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: mytheme.palette.mode === "dark" ? grey[800] : "#999", color: mytheme.palette.mode === "dark" ? grey[200] : grey[800] }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        icon={<HubRounded />}
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: '#999', color: '#4c7d9f' }}
      >
        <h3 className="vertical-timeline-element-title">پا دویی و بازاریابی </h3>
        <h4 className="vertical-timeline-element-subtitle">پا دویی بازار و بازاریابی شبکه ای</h4>
        <p>
          توسط یکی از دوستانم به یکی از شرکتهای بازاریابی شبکه ای معرفی شدم و بعد از مدتی توسط همون شخص به بازاریابی کردن برای پارچه معرفی شدم و بعد از دوسال تونستم با سفر کردن به شهر های مختلف مشتری قابل توجهی بدست بیارم و بعد بهمراه یکی از اشناها تو بازار تهران تونستم تو ۲۲ سالگی تو بازار اصلی مغازه باز کنم همراه با کلی مشتری بلقوه از سراسر ایران
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: mytheme.palette.mode === "dark" ? grey[800] : "#999", color: mytheme.palette.mode === "dark" ? grey[200] : grey[800] }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        icon={<TrendingDownRounded />}
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: '#999', color: red[500] }}

      >
        <h3 className="vertical-timeline-element-title">سقوط</h3>
        <h4 className="vertical-timeline-element-subtitle">تحریم و اعتماد</h4>
        <p>
          خیلی زود تحریم های امریکا علیه ایران شروع شد و بازار ازاد تو کما برای همیشه فرو رفت و فیلترینگ شبکه های اجتماعی و قطع ارتباط ما با مشتری ها هم به این موضوع دامن زد تا دلیلی بر شونه خالی کردن شریکم زیر کرایه سنگین مغازه بشه و درنهایت من دموندم و من با کلی بدهی و شکست سنگین از اعتماد به اشنا و پارچه هایی که کسی حاظر نبود حتی زیر قیت تولید بخره
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: mytheme.palette.mode === "dark" ? grey[800] : "#999", color: mytheme.palette.mode === "dark" ? grey[200] : grey[800] }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        icon={<WbIncandescentRounded />}
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: '#999', color: orange[400] }}
      >
        <h3 className="vertical-timeline-element-title">بازگشت</h3>
        <h4 className="vertical-timeline-element-subtitle">اما نه به شکل قبل</h4>
        <p>
          بعد از تحویل مغازه بازار طلبکار ها به سراغم اومدن و همزمان به چند دادگاه ارجا شدم همون حین یکی از اشناها یک بازار یابی بهم معرفی کرد که اینبار فرق داشت پلتفرم ان توسط قراد داد هوشمند کنترل و تضمین میشد و پاداش ان به صورت رمزارز بین بازاریاب ها داده میشد همان هنگام بقول معروف لامپم روشن شد ارررره خودشه همونه که میخواستم . من محو قدرت بلاکچین شده بودم چون نه تنها تحریم بلکه مشکل اعتماد هم میشه توسط قرارداد هوشمند تضمین کرد دیگه هیچ چیز نمیتونه هیچجوره کسب و کارمو تهدید کنه . این همون چیزی بود که میخواستم یعنی امنیت شغلی و خوشبختانه تونستم از فعالیت در همین بازاریابی پول طلبکارهارو پرداخت کنم و رضایت اونارو جلب کنم
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: mytheme.palette.mode === "dark" ? grey[800] : "#999", color: mytheme.palette.mode === "dark" ? grey[200] : grey[800] }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        icon={<TerminalRounded />}
        iconStyle={{ background: '#999', color: green[800] }}
      >
        <h3 className="vertical-timeline-element-title">برنامه نویسی</h3>
        <h4 className="vertical-timeline-element-subtitle">بدون وقت تلف کردن</h4>
        <p>
          بسیار  زیاد درمورد بلاکچین و قراردادهای هوشمند بدون خستگی ماه ها مطالعه کردم و رفته رفته حیرت زده تر میشدم تا متوجه شدم باید خودم دست بکار بشم و کسب و کارمو بصورت قرارداد هوشمند روی بلاکچین بنویسم و شروع کردم به اموزش دیدن
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: mytheme.palette.mode === "dark" ? grey[800] : "#999", color: mytheme.palette.mode === "dark" ? grey[200] : grey[800] }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        icon={<SiJavascript />}
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: '#999', color: yellow[700] }}
      >

        <h3 className="vertical-timeline-element-title">یادگیری فرانت</h3>
        <h5 className="vertical-timeline-element-subtitle">بیسیک</h5>
        <br />
        <h4 className="vertical-timeline-element-subtitle">Html5,Css3,flexbox,Javascript(Es6),Bootstrap,Ajax(axios,xml,jquery)</h4>
        <p>
          رفتم سراغ ویدیو های انلاین و شروع کردم به یادگیری و حدود دوسالی تمرین جاوااسکریپت وبوت استرپ کردم و با متد های اچ تی تی پی داده های جیسون رو از منبع های اماده دریافت و ارسال میکردم که خیلی برام لذت بخش بود اونموقع ولی خب کاملا با مفهوم پرامیس ها و جاوااسکریپت نامتقارن اشنا شدم
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: mytheme.palette.mode === "dark" ? grey[800] : "#999", color: mytheme.palette.mode === "dark" ? grey[200] : grey[800] }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        icon={<SiSolidity />}
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: '#999', color: "#333"}}
      >

        <h3 className="vertical-timeline-element-title">یادگیری سالیدیتی</h3>
        <h4 className="vertical-timeline-element-subtitle">اما ناموفق</h4>
        <p>
          طبق نقشه راهی که از استاید و منابع انلاین داشتم حس کردم وقتشه برم سراغ سالیدیتی بلافاصله توی یک بوت کمپ حضوری با عنوان بوت کمپ برنامه نویسی بلاکچین ثبت نام کردم اما خیلی از از نکات رو متوجه نمیشدم مثل نود پکیج و خیلی از اصطلاحات دیگ رو و علاوه بر ان نیاز دیدم حداقل با یکی از فریم ورک های جاوااسکریپت  باید  بلد باشم کار کنم چه برسه به فریم ورک ها و کتابخانه های سالیدیتی خلاصه به این درک رسیدم تا نتونم یک پلیکیشن وب ۲ رو پیاده سازی کنم نمیتونم سراغ وب ۳ برم
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: mytheme.palette.mode === "dark" ? grey[800] : "#999", color: mytheme.palette.mode === "dark" ? grey[200] : grey[800] }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        icon={<SiReact />}
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: '#999', color: blue[800] }}
      >
        <h3 className="vertical-timeline-element-title">یادگیری فرانت</h3>
        <h4 className="vertical-timeline-element-subtitle">پیشرفته </h4>
        <br />
        <h4 className="vertical-timeline-element-subtitle">React.js,Redux,Next.js,MaterialUi,...</h4>
        <p>
          بلافاصله رفتم سراغ ری اکت وبعد از گذروندن دوره انلاین  ۲۰۰ ساعته صفر تا صد ری اکت بهمراه تریال دیزاین تونستم اپلیکیشن های زیبایی رو خلق کنم اما دوست داشتم نکست هم یاد بگیر تا بتونم اپلیکشن های بهینه تری که قابلیت رندر صفحات وب رو روی سرور دارند رو پیاده سازی کنم پس دوره انلاین ۱۰۰ ساعته صفر تا صد نکست رو هم گذروندم و حالا دیگه متوجه شده بودم برنامه نویسی حفظ کردن کد ها نیست بلکه کد ها در داکیومنت موجوده فقط باید بتونم داکیومنت بخونم
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ backgroundColor: mytheme.palette.mode === "dark" ? grey[800] : "#999", color: mytheme.palette.mode === "dark" ? grey[200] : grey[800] }}
        contentArrowStyle={{ borderRight: '7px solid  #999' }}
        icon={<SiNodedotjs />}
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: '#999', color: green[800] }}
      >
        <h3 className="vertical-timeline-element-title">یادگیری بک</h3>
        <h4 className="vertical-timeline-element-subtitle">صفرتاصد </h4>
        <br />
        <h4 className="vertical-timeline-element-subtitle">node.js</h4>
        <p>
          حالا دیگه میتونستم هر اپلیکیشنی که میخوام رو بسازم وحالا دیگه به وب ۲ هم علاقه پیدا کرده بودم اما مشکلی وجود داشت ! اون هم اینکه داده ها در اپلیکیشن من واقعی نبودند و صرفا ابجکت هایی بودن که تو فایل جیسون اپلیکشن ذخیره کرده بودم پس ه فکر نوشتن کد سمت سرور افتادم و چه زبانی بهتر از جاوااسکریپت که باهاش بسیار راحتم پس سراغ نود جی اس رفتم
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}
export default MYtimeline;
