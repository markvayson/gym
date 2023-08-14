import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === page
          ? " text-indigo-600 border-b-4 border-indigo-600"
          : ""
      }
    transition-color duration-300  hover:bg-indigo-600 hover:text-white p-2`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(selectedPage);
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
