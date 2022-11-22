var s=Object.defineProperty;var e=(n,o)=>s(n,"name",{value:o,configurable:!0});import{c}from"./clsx.m.256e9345.js";import{$ as l}from"./index.module.e4f9e2cc.js";import{L as u,M as d}from"./index.f901d620.js";import{j as r}from"./jsx-runtime.03207dd2.js";import"./index.0289cf33.js";import"./iframe.b328cd99.js";function t({asChild:n,children:o,className:a,...i}){return r(n?l:"li",{className:"list-none",children:r(u,{className:c("py-3 px-6 bg-transparent rounded font-semibold text-cyan-500 text-sm border-solid border-2 border-cyan-500  hover:bg-cyan-500 hover:text-gray-900 transition-colors  ",a),...i,children:o})})}e(t,"LinkButton");try{t.displayName="LinkButton",t.__docgenInfo={description:"",displayName:"LinkButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/LinkButton/index.tsx#LinkButton"]={docgenInfo:t.__docgenInfo,name:"LinkButton",path:"src/components/LinkButton/index.tsx#LinkButton"})}catch{}const h={parameters:{storySource:{source:`import { Meta, StoryFn } from "@storybook/react";\r
import { LinkButton, LinkButtonProps } from ".";\r
import { MemoryRouter } from "react-router-dom";\r
\r
export default {\r
  title: "Components/Link Button",\r
  component: LinkButton,\r
  args: {\r
    children: "Create account",\r
    asChild: true,\r
  },\r
  argTypes: {\r
    asChild: {\r
      table: {\r
        disable: true,\r
      },\r
    },\r
  },\r
} as Meta<LinkButtonProps>;\r
\r
export const Default: StoryFn<LinkButtonProps> = ({\r
  children,\r
}: LinkButtonProps) => {\r
  return (\r
    <MemoryRouter>\r
      <LinkButton to="/">{children}</LinkButton>\r
    </MemoryRouter>\r
  );\r
};\r
`,locationsMap:{default:{startLoc:{col:49,line:21},endLoc:{col:1,line:29},startBody:{col:49,line:21},endBody:{col:1,line:29}}}}},title:"Components/Link Button",component:t,args:{children:"Create account",asChild:!0},argTypes:{asChild:{table:{disable:!0}}}},C=e(({children:n})=>r(d,{children:r(t,{to:"/",children:n})}),"Default"),x=["Default"];export{C as Default,x as __namedExportsOrder,h as default};
//# sourceMappingURL=LinkButton.stories.dc89f2c7.js.map
