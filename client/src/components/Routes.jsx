import AccessPage from "./AccessPage";
import CinematicPlayer from "./CinematicPlayer";
import PostScreening from "./PostScreening";
import WelcomePage from "./WelcomePage";
import LandingPage from "./LandingPage";

const routes = [
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "accesspage",
        element: <AccessPage />
    },
    {
        path: "welcome",
        element: <WelcomePage />
    },
    {
        path: "cinema/:name?",
        element: <CinematicPlayer />
    },
    {
        path: "postscreening",
        element: <PostScreening />
    }
]

export default routes;