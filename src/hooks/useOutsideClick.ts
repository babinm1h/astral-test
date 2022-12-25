import { useRef, useState, useEffect } from "react";

export const useOutsideClick = (initState: boolean) => {
  const [isVisible, setIsVisible] = useState(initState);
  const ref = useRef<HTMLElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (e.which === 1 && ref.current && !ref.current.contains(e.target as Node)) {
      setIsVisible(false);
    }
  };

  const onToggleVisible = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isVisible]);

  return { isVisible, setIsVisible, ref, onToggleVisible };
};
