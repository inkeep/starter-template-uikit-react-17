import { useEffect, useRef } from "react";
import * as inkeepJS from "@inkeep/uikit-js";
import { inkeepProps } from "./inkeepSettings";

export const SearchBar = () => {
  const SearchBarRef = useRef<any>(null);

  useEffect(() => {
    const inkeep = inkeepJS.Inkeep(inkeepProps.baseSettings);

    SearchBarRef.current = inkeep.embed({
      componentType: "SearchBar",
      targetElement: "#search-bar-target",
      properties: {
        ...inkeepProps,
        // optional -- for syncing UI color mode
        // colorModeSync: {
        //   observedElement: document.documentElement,
        //   isDarkModeCallback: (el) => {
        //     return el.classList.contains("dark");
        //   },
        //   colorModeAttribute: "class",
        // },
      },
    });
  }, []);

  return <div id="search-bar-target" />;
};
