import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "@/shared/Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { AnimatePresence, motion, useAnimate, useScroll } from "framer-motion";
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function useMenuAnimation(isMenuToggled: boolean) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "#menu-button",
      { rotate: isMenuToggled ? 180 : 0, scale: isMenuToggled ? 0.9 : 1 },
      { duration: 0.1 },
    );
  }, [isMenuToggled]);

  return scope;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const WhiteBackground = isTopOfPage
    ? "opacity-1"
    : "transition-all opacity-30 hover:opacity-100";
  const pageValues = Object.values(SelectedPage);

  const { scrollYProgress } = useScroll();
  const scope = useMenuAnimation(isMenuToggled);

  return (
    <nav ref={scope}>
      <div className={` ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <motion.div
              className="fixed bottom-0 left-0 right-0 h-2 origin-[0%] bg-indigo-600 "
              style={{ scaleX: scrollYProgress }}
            />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {pageValues.map((page) => (
                    <Link
                      key={page}
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                <div
                  className={`${WhiteBackground} flex items-center justify-evenly gap-8 bg-none pl-8 `}
                >
                  <p>Log in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Get App
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                id="menu-button"
                className={`${
                  !isTopOfPage &&
                  !isMenuToggled &&
                  "opacity-20 hover:opacity-100"
                } transition-color  rounded-full p-2 duration-300 ${
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
      <AnimatePresence>
        {!isAboveMediumScreens && isMenuToggled && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            exit={{ width: 10, opacity: 0 }}
            animate={{ width: 300, opacity: 1 }}
            className="lef-0 fixed bottom-0 z-20 h-full w-[300px] bg-slate-50 drop-shadow-xl"
          >
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              exit={{ x: -300, opacity: 0 }}
              animate={{ x: 1, opacity: 1 }}
              className="flex h-full flex-col items-end justify-center gap-5 whitespace-nowrap pr-16 text-2xl"
            >
              {pageValues.map((page) => (
                <Link
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
