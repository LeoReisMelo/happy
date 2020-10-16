import { Router } from "express";
import multer from "multer";
import OrphanagesController from "./controllers/OrphanagesController";
import uploadConfig from "./config/upload";

const routes = Router();
const uploads = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post(
  "/orphanages",
  uploads.array("images"),
  OrphanagesController.create
);

export default routes;
