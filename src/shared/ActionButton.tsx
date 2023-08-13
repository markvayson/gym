import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="transition-color duration-300 rounded-md bg-indigo-600 text-white px-10 py-2 hover:bg-indigo-400 "
      onClick={() => setSelectedPage(SelectedPage.contactus)}
      href={`#${SelectedPage.contactus}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
