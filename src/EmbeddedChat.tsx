import { useEffect, useRef } from "react";
import * as inkeepJS from "@inkeep/uikit-js";
import { inkeepProps } from "./inkeepSettings";

export const EmbeddedChat = () => {
  const embeddedChatRef = useRef(null);

  useEffect(() => {
    const inkeep = inkeepJS.Inkeep(inkeepProps.baseSettings);

    embeddedChatRef.current = inkeep.embed({
      componentType: "EmbeddedChat",
      targetElement: "#embedded-chat-target",
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

  return (
    <div className="ikp-wrapper">
      <div id="embedded-chat-target" className="ikp-embedded-chat-wrapper" />
    </div>
  );
};
