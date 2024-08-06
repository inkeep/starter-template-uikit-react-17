import { useEffect, useRef } from "react";
import { inkeepProps } from "./inkeepSettings";

export const ChatButtonSSR = () => {
  const chatButtonRef = useRef(null);

  useEffect(() => {
    const loadInkeepEmbed = async () => {
      const inkeepEmbed = await import("@inkeep/uikit-js");

      const inkeepChatButtonProps = {
        chatButtonType: "PILL",
        ...inkeepProps,
      };

      const inkeep = inkeepEmbed.Inkeep(inkeepProps.baseSettings);

      chatButtonRef.current = inkeep.embed({
        componentType: "ChatButton",
        targetElement: "#chat-button",
        properties: inkeepChatButtonProps,
      });
    };

    loadInkeepEmbed();
  }, []);

  return <div id="chat-button" />;
};
