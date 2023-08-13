import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const WhiteBackground = isTopOfPage
    ? "opacity-1"
    : "transition-all opacity-30 border border-gray-300 hover:opacity-100 duration-300 bg-white drop-shadow";
  const pageValues = Object.values(SelectedPage);
  return (
    <nav>
      <div className={` ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={` ${flexBetween} w-full gap-16`}>
            <AnchorLink
              href={`#evofit`}
              onClick={() => setSelectedPage(SelectedPage.evofit)}
              className={`${WhiteBackground} font-montserrat uppercase font-extrabold tracking-wider text-2xl ${
                selectedPage === SelectedPage.evofit
                  ? "border-b-4 border-indigo-600"
                  : ""
              }`}
            >
              Evofit
            </AnchorLink>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div
                  className={`${WhiteBackground} ${flexBetween} gap-8 text-sm`}
                >
                  {pageValues.map(
                    (page) =>
                      page !== SelectedPage.evofit && (
                        <Link
                          key={page}
                          page={page}
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      ),
                  )}
                </div>
                <div
                  className={`${WhiteBackground} bg-none flex items-center justify-evenly gap-8 pl-8 `}
                >
                  <p>Log in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Get App
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className={`${
                  !isTopOfPage &&
                  !isMenuToggled &&
                  "opacity-20 hover:opacity-100"
                } transition-color duration-300 rounded-full p-2 ${
                  !isMenuToggled
                    ? "bg-indigo-600 hover:bg-indigo-400"
                    : "bg-slate-400 hover:bg-slate-600"
                } `}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                {!isMenuToggled ? (
                  <Bars3Icon className="h-6 w-6 text-white" />
                ) : (
                  <XMarkIcon className="h-6 w-6 text-white" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-20 h-full w-[300px] bg-slate-50 drop-shadow-xl">
          <div className=" h-full items-end pr-16 flex flex-col gap-5 text-2xl justify-center">
            {pageValues.map((page) => (
              <Link
                key={`mobile-${page}`}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
