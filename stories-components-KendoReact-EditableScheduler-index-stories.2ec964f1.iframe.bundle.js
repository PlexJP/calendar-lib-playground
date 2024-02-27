"use strict";(self.webpackChunkcalendar_lib_playground=self.webpackChunkcalendar_lib_playground||[]).push([[537],{"./src/stories/components/KendoReact/EditableScheduler/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Story_EditableScheduler:()=>Story_EditableScheduler,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),kendo_react_common=__webpack_require__("./node_modules/@progress/kendo-react-common/index.mjs"),kendo_react_scheduler=__webpack_require__("./node_modules/@progress/kendo-react-scheduler/index.mjs"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var baseData=[{TaskID:4,OwnerID:2,Title:"Bowling tournament",Description:"",StartTimezone:null,Start:"2024-06-09T21:00:00.000Z",End:"2024-06-10T00:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:5,OwnerID:2,Title:"Take the dog to the vet",Description:"",StartTimezone:null,Start:"2024-06-10T07:00:00.000Z",End:"2024-06-10T08:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:6,OwnerID:2,Title:"Call Charlie about the project",Description:"",StartTimezone:null,Start:"2024-06-11T11:30:00.000Z",End:"2024-06-11T13:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:7,OwnerID:3,Title:"Meeting with Alex",Description:"",StartTimezone:null,Start:"2024-06-12T11:00:00.000Z",End:"2024-06-12T12:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:9,OwnerID:2,Title:"Alex's Birthday",Description:"",StartTimezone:null,Start:"2024-06-14T02:00:00.000Z",End:"2024-06-14T02:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!0},{TaskID:12,OwnerID:2,Title:"Car Service",PersonID:1,Description:"Might come to work later!",StartTimezone:null,Start:"2024-06-24T08:30:00.000Z",End:"2024-06-24T10:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:14,OwnerID:3,PersonID:2,LocationID:3,Title:"Replace the printer on the 1st floor",Description:"",StartTimezone:null,Start:"2024-06-24T10:00:00.000Z",End:"2024-06-24T11:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!0},{TaskID:15,OwnerID:1,Title:"Attending HR Conference",Description:"",StartTimezone:null,Start:"2024-06-25T00:00:00.000Z",End:"2024-06-26T00:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!0},{TaskID:16,OwnerID:1,Title:"Business Lunch with Gregory Watkins",Description:"",StartTimezone:null,Start:"2024-06-25T12:00:00.000Z",End:"2024-06-25T13:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:17,OwnerID:1,Title:"Breakfast with CFO and COO",Description:"",StartTimezone:null,Start:"2024-06-27T08:30:00.000Z",End:"2024-06-27T09:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:18,OwnerID:1,Title:"Job Interview - Mathew Stevens",Description:"Junior Researcher",StartTimezone:null,Start:"2024-06-27T10:00:00.000Z",End:"2024-06-27T11:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:19,OwnerID:1,Title:"Review CVs with Tim",Description:"",StartTimezone:null,Start:"2024-06-27T11:00:00.000Z",End:"2024-06-27T11:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:20,OwnerID:1,Title:"Lunch with Monica",Description:"Discuss the Employee handbook",StartTimezone:null,Start:"2024-06-27T12:00:00.000Z",End:"2024-06-27T13:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:21,OwnerID:1,Title:"Job Interview - John Stewart",Description:"Accountant",StartTimezone:null,Start:"2024-06-27T14:00:00.000Z",End:"2024-06-27T15:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:22,OwnerID:1,Title:"Job Interview - Mary Smith",Description:"Accountant",StartTimezone:null,Start:"2024-06-27T15:30:00.000Z",End:"2024-06-27T16:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:24,OwnerID:3,Title:"Register new Access Cards",Description:"",StartTimezone:null,Start:"2024-06-24T12:00:00.000Z",End:"2024-06-24T12:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!0},{TaskID:25,OwnerID:1,Title:"HR Lecture",Description:"",StartTimezone:null,Start:"2024-06-04T19:00:00.000Z",End:"2024-06-04T21:00:00.000Z",EndTimezone:null,RecurrenceRule:"FREQ=WEEKLY;BYDAY=TU,TH",RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:26,OwnerID:1,Title:"Dentist",Description:"",StartTimezone:null,Start:"2024-06-28T08:00:00.000Z",End:"2024-06-28T09:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:27,OwnerID:1,Title:"Job Interview - Laura Bailey",Description:"Helpdesk",StartTimezone:null,Start:"2024-06-28T09:30:00.000Z",End:"2024-06-28T10:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:28,OwnerID:1,Title:"Job Interview - Jenny Baxter",Description:"Helpdesk",StartTimezone:null,Start:"2024-06-28T11:00:00.000Z",End:"2024-06-28T12:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:31,OwnerID:1,Title:"Team building prep tasks",Description:"",StartTimezone:null,Start:"2024-06-28T14:00:00.000Z",End:"2024-06-28T17:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:32,OwnerID:2,PersonID:2,Title:"Job Interview - Bernard Atkins",Description:"Helpdesk",StartTimezone:null,Start:"2024-06-24T13:30:00.000Z",End:"2024-06-24T14:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:34,OwnerID:1,Title:"Review Job Applications",Description:"",StartTimezone:null,Start:"2024-06-24T15:00:00.000Z",End:"2024-06-24T17:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:35,OwnerID:1,Title:"Grand Canyon tour",Description:"",StartTimezone:null,Start:"2024-06-23T00:00:00.000Z",End:"2024-06-23T00:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!0},{TaskID:40,OwnerID:3,Title:"Install new laptops in conference persons",Description:"",StartTimezone:null,Start:"2024-06-24T13:30:00.000Z",End:"2024-06-24T15:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:66,OwnerID:3,Title:"Bob's Birthday",Description:"",StartTimezone:null,Start:"2024-06-29T08:00:00.000Z",End:"2024-06-29T06:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!0},{TaskID:68,OwnerID:1,PersonID:2,Title:"Breakfast with Tom",Description:"",StartTimezone:null,Start:"2024-06-24T09:45:00.000Z",End:"2024-06-24T11:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:69,OwnerID:2,Title:"Team planning meeting",Description:"",StartTimezone:null,Start:"2024-06-24T10:00:00.000Z",End:"2024-06-24T12:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!0},{TaskID:70,OwnerID:2,Title:"Support Phone Call",Description:"",StartTimezone:null,Start:"2024-06-24T16:00:00.000Z",End:"2024-06-24T16:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!0},{TaskID:71,OwnerID:2,Title:"Business breakfast with Caroline",Description:"",StartTimezone:null,Start:"2024-06-25T09:00:00.000Z",End:"2024-06-25T10:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:72,OwnerID:2,Title:"Discuss preojects' deadlines",Description:"",StartTimezone:null,Start:"2024-06-25T11:00:00.000Z",End:"2024-06-25T11:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:73,OwnerID:2,Title:"Support Meeting",Description:"",StartTimezone:null,Start:"2024-06-25T15:00:00.000Z",End:"2024-06-25T16:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:74,OwnerID:2,Title:"Dine with Mathew",Description:"",StartTimezone:null,Start:"2024-06-25T18:30:00.000Z",End:"2024-06-25T20:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:79,OwnerID:2,Title:"Banking",Description:"",StartTimezone:null,Start:"2024-06-26T09:00:00.000Z",End:"2024-06-26T10:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:80,OwnerID:3,Title:"Software updates",Description:"",StartTimezone:null,Start:"2024-06-25T10:00:00.000Z",End:"2024-06-25T12:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:81,OwnerID:3,Title:"UPS maintenance",Description:"",StartTimezone:null,Start:"2024-06-25T16:30:00.000Z",End:"2024-06-25T18:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:82,OwnerID:2,Title:"Support Call",Description:"",StartTimezone:null,Start:"2024-06-26T11:30:00.000Z",End:"2024-06-26T12:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:83,OwnerID:3,Title:"Phone Sync with NY office ",Description:"",StartTimezone:null,Start:"2024-06-26T13:30:00.000Z",End:"2024-06-26T14:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:84,OwnerID:3,Title:"Phone Sync with Boston Office",Description:"",StartTimezone:null,Start:"2024-06-26T15:00:00.000Z",End:"2024-06-26T16:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:85,OwnerID:3,Title:"Server maintenance",Description:"",StartTimezone:null,Start:"2024-06-26T18:30:00.000Z",End:"2024-06-26T21:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!0},{TaskID:86,OwnerID:2,Title:"Status meeting",Description:"",StartTimezone:null,Start:"2024-06-28T13:30:00.000Z",End:"2024-06-28T15:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:87,OwnerID:3,Title:"Helpdesk status meeting",Description:"",StartTimezone:null,Start:"2024-06-27T10:30:00.000Z",End:"2024-06-27T11:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:88,OwnerID:2,Title:"Business Lunch",Description:"",StartTimezone:null,Start:"2024-06-27T12:00:00.000Z",End:"2024-06-27T13:00:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:89,OwnerID:3,Title:"Employee database update",Description:"",StartTimezone:null,Start:"2024-06-27T14:00:00.000Z",End:"2024-06-27T15:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:90,OwnerID:3,Title:"Website upload",Description:"",StartTimezone:null,Start:"2024-06-27T07:30:00.000Z",End:"2024-06-27T08:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:91,OwnerID:2,Title:"Meeting with marketing guys",Description:"",StartTimezone:null,Start:"2024-06-27T17:00:00.000Z",End:"2024-06-27T18:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:92,OwnerID:3,Title:"Meeting with Internet provider",Description:"",StartTimezone:null,Start:"2024-06-28T10:30:00.000Z",End:"2024-06-28T11:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:93,OwnerID:3,Title:"Bob's Birthday Party",Description:"",StartTimezone:null,Start:"2024-06-29T20:00:00.000Z",End:"2024-06-29T23:30:00.000Z",EndTimezone:null,RecurrenceRule:null,RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:95,OwnerID:3,Title:"Dance Practice",Description:"",StartTimezone:null,Start:"2024-06-03T18:30:00.000Z",End:"2024-06-03T20:00:00.000Z",EndTimezone:null,RecurrenceRule:"FREQ=WEEKLY;BYDAY=MO,WE",RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:114,OwnerID:3,Title:"Software updates",Description:"",StartTimezone:null,Start:"2024-06-04T09:00:00.000Z",End:"2024-06-04T12:00:00.000Z",EndTimezone:null,RecurrenceRule:"",RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:115,OwnerID:1,Title:"Breakfast at Starbucks",Description:"",StartTimezone:null,Start:"2024-06-04T08:00:00.000Z",End:"2024-06-04T09:30:00.000Z",EndTimezone:null,RecurrenceRule:"",RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:116,OwnerID:2,Title:"Performance review",Description:"",StartTimezone:null,Start:"2024-06-04T14:00:00.000Z",End:"2024-06-04T17:00:00.000Z",EndTimezone:null,RecurrenceRule:"",RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:118,OwnerID:1,Title:"HR seminar preparation",Description:"",StartTimezone:null,Start:"2024-06-05T10:00:00.000Z",End:"2024-06-05T12:00:00.000Z",EndTimezone:null,RecurrenceRule:"",RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:119,OwnerID:3,Title:"Helpdesk weekly meeting",Description:"",StartTimezone:null,Start:"2024-06-05T15:00:00.000Z",End:"2024-06-05T16:00:00.000Z",EndTimezone:null,RecurrenceRule:"FREQ=WEEKLY;BYDAY=WE",RecurrenceID:null,RecurrenceException:null,isAllDay:!1},{TaskID:120,OwnerID:3,Title:"Website upload",Description:"",StartTimezone:null,Start:"2024-06-07T07:00:00.000Z",End:"2024-06-07T08:30:00.000Z",EndTimezone:null,RecurrenceRule:"",RecurrenceID:null,RecurrenceException:null,isAllDay:!1}],customModelFields={id:"TaskID",title:"Title",description:"Description",start:"Start",end:"End",recurrenceRule:"RecurrenceRule",recurrenceId:"RecurrenceID",recurrenceExceptions:"RecurrenceException"},currentYear=(new Date).getFullYear(),parseAdjust=function parseAdjust(eventDate){var date=new Date(eventDate);return date.setFullYear(currentYear),date},randomInt=function randomInt(min,max){return Math.floor(Math.random()*(max-min+1))+min},displayDate=new Date(Date.UTC(currentYear,5,24)),sampleDataWithCustomSchema=(baseData.map((function(dataItem){return{id:dataItem.TaskID,start:parseAdjust(dataItem.Start),startTimezone:dataItem.StartTimezone,end:parseAdjust(dataItem.End),endTimezone:dataItem.EndTimezone,isAllDay:dataItem.isAllDay,title:dataItem.Title,description:dataItem.Description,recurrenceRule:dataItem.RecurrenceRule,recurrenceId:dataItem.RecurrenceID,recurrenceExceptions:dataItem.RecurrenceException,personId:dataItem.PersonID,ownerID:dataItem.OwnerID,locationId:dataItem.OwnerID}})),baseData.map((function(dataItem){return{id:dataItem.TaskID,start:parseAdjust(dataItem.Start),startTimezone:dataItem.StartTimezone,end:parseAdjust(dataItem.End),endTimezone:dataItem.EndTimezone,isAllDay:dataItem.isAllDay,title:dataItem.Title,description:dataItem.Description,recurrenceRule:dataItem.RecurrenceRule,recurrenceId:dataItem.RecurrenceID,recurrenceExceptions:dataItem.RecurrenceException,personId:randomInt(1,2),locationId:randomInt(1,2)}})),baseData.map((function(dataItem){return _objectSpread(_objectSpread({},dataItem),{},{Start:parseAdjust(dataItem.Start),End:parseAdjust(dataItem.End),LocationIDs:randomInt(1,2),PersonID:randomInt(1,2)})}))),__jsx=react.createElement,EditableScheduler=function EditableScheduler(_ref){var orientation=_ref.orientation,_useState=(0,react.useState)("day"),view=_useState[0],setView=_useState[1],_useState2=(0,react.useState)(displayDate),date=_useState2[0],setDate=_useState2[1],_useState3=(0,react.useState)(sampleDataWithCustomSchema),data=_useState3[0],setData=_useState3[1];return __jsx(kendo_react_scheduler._F,{editable:!0,data,view,date,onDataChange:function handleDataChange(_ref2){var created=_ref2.created,updated=_ref2.updated,deleted=_ref2.deleted;setData((function(old){return old.filter((function(item){return void 0===deleted.find((function(current){return current.TaskID===item.TaskID}))})).map((function(item){return updated.find((function(current){return current.TaskID===item.TaskID}))||item})).concat(created.map((function(item){return Object.assign({},item,{TaskID:(0,kendo_react_common.Os)()})})))}))},onViewChange:function handleViewChange(event){setView(event.value)},onDateChange:function handleDateChange(event){setDate(event.value)},modelFields:customModelFields,group:{resources:["Persons","Location"],orientation},resources:[{name:"Persons",data:[{text:"田中太郎",value:1},{text:"佐藤二郎",value:2,color:"#FF7272"}],field:"PersonID",valueField:"value",textField:"text",colorField:"color"},{name:"Location",data:[{text:"現場A",value:1,color:"#5392E4"},{text:"現場B",value:2,color:"#54677B"}],field:"LocationIDs",valueField:"value",textField:"text",colorField:"color"}]},__jsx(kendo_react_scheduler.ZJ,null),__jsx(kendo_react_scheduler.Co,null),__jsx(kendo_react_scheduler.Q5,null),__jsx(kendo_react_scheduler.cr,null),__jsx(kendo_react_scheduler.Af,null))};EditableScheduler.displayName="EditableScheduler";try{EditableScheduler.displayName="EditableScheduler",EditableScheduler.__docgenInfo={description:"",displayName:"EditableScheduler",props:{orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/KendoReact/EditableScheduler/index.tsx#EditableScheduler"]={docgenInfo:EditableScheduler.__docgenInfo,name:"EditableScheduler",path:"src/stories/components/KendoReact/EditableScheduler/index.tsx#EditableScheduler"})}catch(__react_docgen_typescript_loader_error){}var kendo_react_intl=__webpack_require__("./node_modules/@progress/kendo-react-intl/index.mjs"),index_stories_jsx=react.createElement;const index_stories={title:"Kendo/EditableScheduler",component:EditableScheduler,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[function(Story){return index_stories_jsx(kendo_react_intl.$J,{language:"jp"},index_stories_jsx(kendo_react_intl.Dk,{locale:"ja"},index_stories_jsx(Story,null)))}]};var Story_EditableScheduler={args:{orientation:"vertical"}};Story_EditableScheduler.parameters={...Story_EditableScheduler.parameters,docs:{...Story_EditableScheduler.parameters?.docs,source:{originalSource:"{\n  args: {\n    orientation: 'vertical'\n  }\n}",...Story_EditableScheduler.parameters?.docs?.source}}};const __namedExportsOrder=["Story_EditableScheduler"]}}]);