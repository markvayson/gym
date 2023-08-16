import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="transition-color rounded-md bg-indigo-600 px-10 py-2 text-white duration-300 hover:bg-indigo-400 "
      onClick={() => setSelectedPage(SelectedPage.contactus)}
      href={`#contactus`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
