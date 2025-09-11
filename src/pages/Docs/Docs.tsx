import { RedocStandalone } from "redoc";

const Docs = () => {
  return <RedocStandalone specUrl="http://localhost:3000/swagger/doc.json" />;
};

export default Docs;
