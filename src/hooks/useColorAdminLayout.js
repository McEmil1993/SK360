import { useEffect } from "react";

export default function useColorAdminLayout(layoutClasses = "") {

  useEffect(() => {
    // ORIGINAL COLOR ADMIN BEHAVIOR:
    // <body class="pace-top">
    document.body.classList.add("pace-top");

    // <html class="app [classes]">
    document.documentElement.className = layoutClasses;

    return () => {
      document.body.className = "";
      document.documentElement.className = "";
    };
  }, [layoutClasses]);
}
