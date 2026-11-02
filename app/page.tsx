import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import ROUTES from "@/ROUTES";
import { VscJson } from "react-icons/vsc";
import { MdOutlineFactCheck, MdCompress, MdCompareArrows } from "react-icons/md";
import { FaCode } from "react-icons/fa";

const tools=[
  {
    "title": "JSON Formatter",
    "description": "Format JSON into readable, structured data.",
    "href": ROUTES.FORMATTER,
    "icon": <VscJson/>
  },
  {
    "title": "JSON Validator",
    "description": "Check whether your JSON is valid.",
    "href": ROUTES.VALIDATOR,
    "icon": <MdOutlineFactCheck />,
  },
  {
    "title": "JSON Minifier",
    "description": "Remove unnecessary whitespace.",
    "href": ROUTES.MINIFIER,
    "icon": <MdCompress/>
  },
  {
    "title": "JSON to TypeScript",
    "description": "Convert JSON into TypeScript interfaces.",
    "href": ROUTES.CONVERTER,
    "icon": <FaCode/>
  },
  {
    "title": "JSON Comparison",
    "description": "Compare two JSON documents and identify differences",
    "href": ROUTES.COMPARE,
    "icon": <MdCompareArrows />
  },
]


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-1 px-6 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool,i)=>(
          <ToolCard key={i} title={tool.title} description={tool.description} href={tool.href} icon={tool.icon}/>
        ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
