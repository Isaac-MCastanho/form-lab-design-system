var p=Object.defineProperty;var t=(r,o)=>p(r,"name",{value:o,configurable:!0});import{r as u}from"./index.0289cf33.js";import{N as f,M as s}from"./index.f901d620.js";import{c as v}from"./clsx.m.256e9345.js";import{$ as N}from"./index.module.e4f9e2cc.js";import{j as n}from"./jsx-runtime.03207dd2.js";import"./iframe.b328cd99.js";const e=t(({isChild:r=!1,className:o,children:c,...d})=>{const[m,a]=u.exports.useState(!1);return n(r?N:"li",{className:v(m?"border-solid border-b-2 border-b-cyan-500  ":"","list-none flex items-center h-full  "),children:n(f,{className:({isActive:i,isPending:k})=>(a(!!i),i?"text-gray-100 ":"text-gray-400 hover:text-gray-100 transition-colors"),...d,children:c})})},"LinkNav");try{e.displayName="LinkNav",e.__docgenInfo={description:"",displayName:"LinkNav",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isChild:{defaultValue:{value:"false"},description:"",name:"isChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/LinkNav/index.tsx#LinkNav"]={docgenInfo:e.__docgenInfo,name:"LinkNav",path:"src/components/LinkNav/index.tsx#LinkNav"})}catch{}const A={parameters:{storySource:{source:`import { Meta, StoryFn, StoryObj } from "@storybook/react";\r
import { LinkNav, LinkNavProps } from ".";\r
import { MemoryRouter } from "react-router-dom";\r
\r
export default {\r
  title: "Components/Link Nav",\r
  component: LinkNav,\r
  args: {\r
    isChild: false,\r
  },\r
\r
  argTypes: {\r
    isActive: {\r
      table: {\r
        disable: true,\r
      },\r
    },\r
\r
    isChild: {\r
      table: {\r
        disable: true,\r
      },\r
    },\r
\r
    className: {\r
      table: {\r
        disable: true,\r
      },\r
    },\r
  },\r
} as Meta<LinkNavProps>;\r
\r
export const Default: StoryFn<LinkNavProps> = ({ children }: LinkNavProps) => {\r
  return (\r
    <MemoryRouter>\r
      <LinkNav to="/">{children}</LinkNav>\r
    </MemoryRouter>\r
  );\r
};\r
\r
Default.args = {\r
  children: "Home",\r
  isChild: false,\r
};\r
\r
export const Active: StoryFn<LinkNavProps> = ({ children }: LinkNavProps) => {\r
  return (\r
    <MemoryRouter>\r
      <LinkNav to="/">{children}</LinkNav>\r
    </MemoryRouter>\r
  );\r
};\r
\r
Active.args = {\r
  children: "Contact",\r
};\r
\r
Active.argTypes = {};\r
`,locationsMap:{default:{startLoc:{col:46,line:33},endLoc:{col:1,line:39},startBody:{col:46,line:33},endBody:{col:1,line:39}},active:{startLoc:{col:45,line:46},endLoc:{col:1,line:52},startBody:{col:45,line:46},endBody:{col:1,line:52}}}}},title:"Components/Link Nav",component:e,args:{isChild:!1},argTypes:{isActive:{table:{disable:!0}},isChild:{table:{disable:!0}},className:{table:{disable:!0}}}},L=t(({children:r})=>n(s,{children:n(e,{to:"/",children:r})}),"Default");L.args={children:"Home",isChild:!1};const l=t(({children:r})=>n(s,{children:n(e,{to:"/",children:r})}),"Active");l.args={children:"Contact"};l.argTypes={};const M=["Default","Active"];export{l as Active,L as Default,M as __namedExportsOrder,A as default};
//# sourceMappingURL=LinkNav.stories.9de5c94d.js.map
