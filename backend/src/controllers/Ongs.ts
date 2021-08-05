import { Request, Response, Router } from 'express'
import { Create, Ready, Update, Delete } from "../services/CRUD_Generics";

const Ong = Router();

Ong.get("/",  (request: Request, response: Response) => {
  Ready("ong", request, response);
});

Ong.post("/create",  (request: Request, response: Response) => {
  Ready("ong", request, response);
});

export default Ong;