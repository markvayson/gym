import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "@/shared/Link";
import ActionButton from "@/shared/ActionButton";
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [menu, toggleMenu] = useState<boolean>(false);
  const pagesValue = Object.values(SelectedPage);
  return (
    <nav>
      {isAboveMediumScreens ? (
        <div
          className={`${
            !isTopOfPage && " bg-slate-50 shadow-md"
          } fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-40 py-5`}
        >
          <div className="flex gap-10">
            {pagesValue.map((item, index) => (
              <Link
                key={`pc-${item}-${index}`}
                page={item}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
          <div className="j flex items-center gap-10">
            <p>Log In</p>
            <ActionButton setSelectedPage={setSelectedPage}>
              Get App
            </ActionButton>
          </div>
        </div>
      ) : (
        <div
          className={`fixed right-0 top-0 z-50 flex h-full w-[200px] flex-col items-end p-10 transition-all duration-500 ${
            menu && "bg-slate-50 shadow-xl"
          }`}
        >
          <motion.button
            animate={{ rotate: menu ? 0 : 180 }}
            transition={{ duration: 0.5 }}
            onClick={() => toggleMenu(!menu)}
            className={`${
              !isTopOfPage && "opacity-50 hover:opacity-100"
            } rounded-full p-2 ${
              menu
                ? "bg-gray-600 hover:bg-gray-500"
                : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            {menu ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </motion.button>
          {menu && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex h-full w-full flex-col gap-5 pt-20 text-end text-lg"
            >
              {pagesValue.map((page, index) => (
                <Link
                  key={page + index}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
