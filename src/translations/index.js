import gender from "./gender";
import age from "./age";
import location from "./location";
import username from "./username";
import password from "./password";
import email from "./email";
import finishedSuccess from "./finishedSuccess";
import cartComp from "./cartComp";
import footer from "./footer";
import errorMessage from "./errorMessage";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...gender,
  ...age,
  ...location,
  ...username,
  ...password,
  ...email,
  ...finishedSuccess,
  ...cartComp,
  ...footer,
  ...errorMessage,

  // common translate keys
  Next: {
    en: "Next",
    no: "Neste",
  },
  Complete: {
    en: "Complete",
    no: "Fullstendig",
  },
  back: {
    en: "Back",
    no: "Tilbake",
  },
};
