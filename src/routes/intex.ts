import { Router } from 'express';
const router = Router();

const routerModels = [
  {
    path: '/users',
    route: UserRoute,
  },
];

routerModels.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
