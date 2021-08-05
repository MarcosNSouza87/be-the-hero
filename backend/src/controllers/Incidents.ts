import { Request, Response, Router } from 'express'
import { Create, Ready, Update, Delete } from "../services/CRUD_Generics";

const Incidents = Router();

Incidents.get("/"|| "/:id",  (request: Request, response: Response) => {
  Ready("incident", request, response);
});

Incidents.post("/create",  (request: Request, response: Response) => {
  Ready("incident", request, response);
});

Incidents.delete("/delete/:id",  (request: Request, response: Response) => {
  Delete("incident", request, response);
});

export default Incidents;