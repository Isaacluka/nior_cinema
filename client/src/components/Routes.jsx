import AccessPage from "./AccessPage";
import CinematicPlayer from "./CinematicPlayer";
import PostScreening from "./PostScreening";
import WelcomePage from "./WelcomePage";

const routes = [
    {
        path: "/",
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