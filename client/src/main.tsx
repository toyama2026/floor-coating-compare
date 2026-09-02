import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Only load the analytics beacon once real endpoint/website-id values are
// configured — otherwise it silently requests an invalid URL in every build.
const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
if (analyticsEndpoint && analyticsWebsiteId) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = `${analyticsEndpoint}/umami`;
  script.dataset.websiteId = analyticsWebsiteId;
  document.body.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
