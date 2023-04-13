"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[26359],{47431:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return c}});var n=a(87462),o=a(45987),r=(a(15007),a(64983)),m=a(91515);const p=["components"],l={},d={_frontmatter:l},i=m.Z;function c(e){let{components:t}=e,a=(0,o.Z)(e,p);return(0,r.mdx)(i,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"colorsetting"},"ColorSetting"),(0,r.mdx)("p",null,"Color management settings."),(0,r.mdx)("h2",{id:"instance"},"Instance"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"engineList")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The available color engines."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"cmsSettingsList")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A list of valid color management system settings configurations."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"workingSpaceCMYKList")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A list of valid CMYK color profiles."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"workingSpaceRGBList")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A list of valid RGB color profiles."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"isValid")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Returns true if the object specifier resolves to valid objects."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Application ",(0,r.mdx)("strong",{parentName:"p"},"parent")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The parent of the ColorSetting (a Application)."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Events ",(0,r.mdx)("strong",{parentName:"p"},"events")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A collection of events."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"EventListeners ",(0,r.mdx)("strong",{parentName:"p"},"eventListeners")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A collection of event listeners."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"ColorSettingsPolicy ",(0,r.mdx)("strong",{parentName:"p"},"cmykPolicy")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The policy for handling colors in a CMYK color model, including reading and embedding color profiles, resolving mismatches between embedded color profiles and the working space, and moving colors between documents."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"enableColorManagement")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, enables color management."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"engine")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The color management module (CMM) for mapping color space gamuts between documents."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"mismatchAskWhenOpening")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, displays a prompt when opening a file whose embedded color profile does not match the current working space. The prompt provides the option to override the default mismatch behavior."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"mismatchAskWhenPasting")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, displays a prompt when importing an object (via pasting, drag-and-drop, or other similar methods) whose colors do not match the current working space. The prompt provides the option to override the default mismatch behavior."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"missingAskWhenOpening")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, displays a prompt when opening a file that does not have an embedded color profile. The prompt provides the option to assign a color profile."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"ColorSettingsPolicy ",(0,r.mdx)("strong",{parentName:"p"},"rgbPolicy")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The policy for handling colors in an RGB color model, including reading and embedding color profiles, handling mismatches between embedded color profiles and the working space, and moving colors from one document to another."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"cmsSettings")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The current color management system settings configuration. Note: For information on possible values, see CMS settings list."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"File ",(0,r.mdx)("strong",{parentName:"p"},"cmsSettingsPath")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The file path of the CSF file to use."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"useBPC")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, uses black point compensation to ensure that shadow detail is preserved by simulating the full dynamic range of the output device."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"workingSpaceCMYK")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The current CMYK profile."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"workingSpaceRGB")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The current RGB profile."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"DefaultRenderingIntent ",(0,r.mdx)("strong",{parentName:"p"},"intent")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The default rendering intent."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"accurateLABSpots")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, uses LAB alternates for spot colors when available."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"idealizedBlackToScreen")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to the screen."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"idealizedBlackToExport")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to print or export."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Object ",(0,r.mdx)("strong",{parentName:"p"},"properties")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A property that allows setting of several properties at the same time.")),(0,r.mdx)("h3",{id:"methods"},"Methods"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"toSource"),"()"),(0,r.mdx)("p",{parentName:"blockquote"},"Generates a string which, if executed, will return the ColorSetting."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"ColorSetting ",(0,r.mdx)("strong",{parentName:"p"},"getElements"),"()"),(0,r.mdx)("p",{parentName:"blockquote"},"Resolves the object specifier, creating an array of object references."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"toSpecifier"),"()"),(0,r.mdx)("p",{parentName:"blockquote"},"Retrieves the object specifier."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"EventListener ",(0,r.mdx)("strong",{parentName:"p"},"addEventListener"),"( String ",(0,r.mdx)("strong",{parentName:"p"},"eventType"),", Mixed ",(0,r.mdx)("strong",{parentName:"p"},"handler"),", Boolean ",(0,r.mdx)("strong",{parentName:"p"},"captures")," )"),(0,r.mdx)("p",{parentName:"blockquote"},"Adds an event listener."),(0,r.mdx)("h4",{parentName:"blockquote",id:"parameters"},"Parameters"),(0,r.mdx)("table",{parentName:"blockquote"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"eventType"),(0,r.mdx)("td",{parentName:"tr",align:null},"The event type.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Mixed"),(0,r.mdx)("td",{parentName:"tr",align:null},"handler"),(0,r.mdx)("td",{parentName:"tr",align:null},"The event handler. Can accept: File or JavaScript Function.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"captures"),(0,r.mdx)("td",{parentName:"tr",align:null},"This parameter is obsolete. (Optional)"))))),(0,r.mdx)("hr",null),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"removeEventListener"),"( String ",(0,r.mdx)("strong",{parentName:"p"},"eventType"),", Mixed ",(0,r.mdx)("strong",{parentName:"p"},"handler"),", Boolean ",(0,r.mdx)("strong",{parentName:"p"},"captures")," )"),(0,r.mdx)("p",{parentName:"blockquote"},"Removes the event listener."),(0,r.mdx)("h4",{parentName:"blockquote",id:"parameters-1"},"Parameters"),(0,r.mdx)("table",{parentName:"blockquote"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"eventType"),(0,r.mdx)("td",{parentName:"tr",align:null},"The registered event type.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Mixed"),(0,r.mdx)("td",{parentName:"tr",align:null},"handler"),(0,r.mdx)("td",{parentName:"tr",align:null},"The registered event handler. Can accept: File or JavaScript Function.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"captures"),(0,r.mdx)("td",{parentName:"tr",align:null},"This parameter is obsolete. (Optional)"))))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-c-color-setting-index-md-c7871a9f9602d7d5e69b.js.map