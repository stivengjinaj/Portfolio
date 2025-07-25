import {
    createRootRoute,
    createRoute,
    createRouter, Outlet,
} from '@tanstack/react-router';
import WelcomePage from "./screens/WelcomePage.tsx";
import Homepage from "./screens/Homepage.tsx";

const rootRoute = createRootRoute({
    component: () => (
        <Outlet />
    ),
});

const welcomePageRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: WelcomePage,
});

const aboutMePageRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/home',
    component: Homepage
})

const routeTree = rootRoute.addChildren([
    welcomePageRoute,
    aboutMePageRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
