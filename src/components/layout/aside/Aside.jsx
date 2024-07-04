import React, { useState } from "react";
import logo from "../../../assets/images/logo/logo.png";
import { pages } from "./pages";
import ChevronIcon from "../../../assets/svgs/pagesIcons/ChevronIcon";
import { Link } from "react-router-dom";

const Aside = () => {
  const [subPagesIsActive, setSubPagesIsActive] = useState("Dashboard");

  const handleSubpages = (subpage) => {
    setSubPagesIsActive((prev) => (prev === subpage ? null : subpage));
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center justify-center gap-2">
        <img src={logo} alt="logo" class="w-[50px]" />
        <h2 className="text-lg font-semibold text-white">Workforce Ease</h2>
      </div>
      <div className="flex flex-col items-start self-center py-6">
        {pages.map((page, i) => (
          <>
            {page.link ? (
              <Link to={page.link} className="flex items-center gap-2 my-2" key={i}>
                <div> {page.icon} </div>
                <div className="text-white text-base text-[18px]"> {page.title} </div>
              </Link>
            ) : (
              <div
                className="flex items-center gap-2 cursor-pointer my-2"
                key={i}
                onClick={() => handleSubpages(page.title)}
              >
                <div> {page.icon} </div>
                <div className="text-white text-base text-[18px]"> {page.title} </div>
                <div className={`trasnform transition-transform duration-500 ${subPagesIsActive === page.title ? 'rotate-0' : 'rotate-180'}`}>
                  <ChevronIcon />
                </div>
              </div>
            )}
            {page.subPages && (
              <div className={`${subPagesIsActive === page.title ? 'max-h-[250px] opacity-100 my-2' : 'max-h-0 opacity-0 my-0'} transition-all duration-500 overflow-hidden flex flex-col gap-3`}>
                {page.subPages.map((subPage, j) => (
                  <Link
                    to={subPage.link}
                    key={j}
                    className="flex items-center gap-3 ml-3"
                  >
                    <div className="w-[5px] h-[5px] rounded-full block bg-white"></div>
                    <div className="text-white text-base"> {subPage.title} </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        ))}
      </div>
      <div>logout</div>
    </div>
  );
};

export default Aside;
