import { Request, Response, Router } from 'express'
import { Create, Ready, Update, Delete } from "../services/CRUD_Generics";

const Ong = Router();

Ong.get("/",  (request: Request, response: Response) => {
  Ready("ongs", request, response);
});

Ong.post("/create",  (request: Request, response: Response) => {
  Create("ongs", request, response);
});

export default Ong;