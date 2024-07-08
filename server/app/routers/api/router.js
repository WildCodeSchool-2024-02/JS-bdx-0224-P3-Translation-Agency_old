// eslint-disable-next-line import/no-unresolved
import { Router } from "express";

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

import usersAppRouter from "./users/userAppRouter";
import clientsRouter from "./clients/clientRouter";
import translatorsRouter from "./translators/translatorRouter";
import estimationsRouter from "./estimations/estimationRouter";

const router = Router();

router.use("/users", usersAppRouter);
router.use("/clients", clientsRouter);
router.use("/translators", translatorsRouter);
router.use("/estimations", estimationsRouter);

/* ************************************************************************* */

export default router;
