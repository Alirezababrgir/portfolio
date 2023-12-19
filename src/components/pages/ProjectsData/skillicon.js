import { CircularWithValueLabel } from "../progressbar";
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
    SiGitlab,

} from "react-icons/si";

export const devSkills = [
    {
        name: `HTML CSS`,
        proccessbar: <CircularWithValueLabel value={70} c={"warning"} />,
        info: "در حدی که بتونم ",
        Icon: <SiHtml5 />,
        icon2: <SiCss3 />
    },
    {
        name: `JAVASCRIPT`,
        proccessbar: <CircularWithValueLabel value={80} c={"warning"} />,
        info: "در حدی که بتونم ",
        Icon: <SiJavascript />,
    },
    {
        name: `JAVASCRIPT FRAME WORK`,
        proccessbar: <CircularWithValueLabel value={80} c={"info"} />,
        info: "در حدی که بتونم ",
        Icon: <SiReact />,
        icon2: <SiRedux />,
        icon3: <SiNextdotjs />
    },
    {
        name: `CSS FRAME WORK`,
        proccessbar: <CircularWithValueLabel value={80} c={"secondary"} />,
        info: "در حدی که بتونم ",
        Icon: <SiMaterialdesign />,
        icon2: <SiBootstrap />,
        icon3: <SiTailwindcss />
    },
    {
        name: `VERSION CONTROLES`,
        proccessbar: <CircularWithValueLabel value={80} c={"error"} />,
        info: "در حدی که بتونم ",
        Icon: <SiGitlab />,
        icon2: <SiGithub />,
        icon3: <SiGit />

    },
    {
        name: `Data Base`,
        proccessbar: <CircularWithValueLabel value={80} c={"success"} />,
        info: "در حدی که بتونم ",
        Icon: <SiMongodb />,
        icon2: <SiMysql />
    },
    {
        name: `IDE`,
        proccessbar: <CircularWithValueLabel value={80} c={"primary"} />,
        info: "در حدی که بتونم ",
        Icon: <SiIntellijidea />,
        icon2: <SiVisualstudiocode />
    },

    {
        name: `SMART CONTRACT`,
        proccessbar: <CircularWithValueLabel value={80} c={"info"} />,
        info: "در حدی که بتونم ",
        Icon: <SiSolidity />,
        icon2: <SiAlchemy />,
        icon3: <SiWeb3Dotjs />
    },
    {
        name: `BACKEDND`,
        proccessbar: <CircularWithValueLabel value={80} c={"success"} />,
        info: "در حدی که بتونم ",
        Icon: <SiNodedotjs />,
    }
]