import gender from "./gender";
import age from "./age";
import location from "./location";
import username from "./username";
import password from "./password";
import email from "./email";
import finishedSuccess from "./finishedSuccess";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...gender,
  ...age,
  ...location,
  ...username,
  ...password,
  ...email,
  ...finishedSuccess,

  // common translate keys
  next: {
    en: "Next",
    no: "",
  },
  back: {
    en: "Back",
    no: "",
  },
};
