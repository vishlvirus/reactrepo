// import {HiShieldCheck} from "react-icons/hi";
// import {MdCancel , MdAnalytics} from "react-icons/md";
import {BsCloudUpload , BsApple} from "react-icons/bs";
import {AiTwotoneSecurityScan} from "react-icons/ai";
import {GiAutomaticSas} from "react-icons/gi"

const data = [
    {
        icon: <BsCloudUpload/>,
        heading: "Cloud",
        details: "Cloud advisory, implementation and managed services. Key platforms AWS,Google, Microsoft Azure, IBM cloud."
    },
    {
        icon: <AiTwotoneSecurityScan/>,
        heading: "Cyber - Security",
        details: "Assess current state and implement cyber security solutions to improve your security posture. Key services: Managed SOC, SIEM implementation, VAPT, Compliance implementation GDPR, ISO 27001, PCI-DSS"
    },
    {
        icon: <BsApple/>,
        heading: "Modern Application Development",
        details: "Design and develop apps with modern technologies Cloud, AI, IOT, BIG DATA, Analytics.",
    },
    {
        icon: <GiAutomaticSas/>,
        heading: "AI Driven Automation",
        details: "Robotic Process Automation (RPA), Bots supercharged with AI, Analytics."
    }
];
export default data;