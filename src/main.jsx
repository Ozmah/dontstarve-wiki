import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DSTLoreWiki from "./DSTLoreWiki";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<DSTLoreWiki />
	</StrictMode>
);
