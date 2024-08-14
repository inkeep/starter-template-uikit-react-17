import { useEffect, useRef, useState } from "react";
import * as inkeepJS from "@inkeep/uikit-js";
import { inkeepProps } from "./inkeepSettings";

export const CustomTrigger = () => {
  const CustomTriggerRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const inkeep = inkeepJS.Inkeep(inkeepProps.baseSettings);

    CustomTriggerRef.current = inkeep.embed({
      componentType: "CustomTrigger",
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
        isOpen,
        onClose: () => {
          setIsOpen(false);
        },
      },
    });
  }, []);

  useEffect(() => {
    if (CustomTriggerRef.current) {
      CustomTriggerRef.current.render({ isOpen });
    }
  }, [isOpen]);

  return (
    <button type="button" onClick={() => setIsOpen(true)}>
      Ask AI
    </button>
  );
};
