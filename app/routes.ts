import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "components/About.tsx"),
    route("products", "components/Products.tsx"),
    route("services", "components/Services.tsx"),
    route("login", "components/Login.tsx"),
    route("register", "components/Register.tsx"),
    route("research", "components/Research.tsx"),
    route("contact", "components/Contact.tsx"),
    route("support", "components/Support.tsx"),
    route("privacy-policy", "components/PrivacyPolicy.tsx"),
    route("faqs", "components/Faqs.tsx"),
    route("404", "components/NotFound.tsx"),
] satisfies RouteConfig;
