import {
    createRootRoute,
    createRoute,
    createRouter, Outlet,
} from '@tanstack/react-router';
import WelcomePage from "./screens/WelcomePage.tsx";

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

const routeTree = rootRoute.addChildren([
    welcomePageRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
