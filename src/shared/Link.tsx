import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage?: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled?: (value: boolean) => void;
};
const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === page
          ? " border-b-4 border-indigo-600 text-indigo-600"
          : ""
      }
    transition-color p-2  duration-300 hover:bg-indigo-600 hover:text-white`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        if (selectedPage) {
          setSelectedPage(selectedPage);
        }
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
