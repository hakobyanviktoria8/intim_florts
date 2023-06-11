import gender from "./gender";
import age from "./age";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...gender,
  ...age,
  
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
