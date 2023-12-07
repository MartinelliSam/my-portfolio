import IconsList from "icons.js";

export default function Icons({name}) {
  const IconComponent = IconsList[name];
  
  return <IconComponent/>;
}
