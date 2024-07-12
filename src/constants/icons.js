import * as icons from "lucide-react";

export const LuIconsList = Object.keys(icons)
  .reverse()
  .filter((key) => !key.startsWith("Lucide") && !key.endsWith("Icon"));
