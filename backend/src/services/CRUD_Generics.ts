import crypto from "crypto";
import connection from "../database/connection";
import { Request, Response } from "express";
//create
async function Create(nomeTable: string, request: Request, response: Response) {
  let newData = request.body;
  newData.id = crypto.randomBytes(4).toString("hex");
  const validate = await connection(nomeTable).insert(newData);
  if (validate !== undefined) {
    return response.status(200).send(newData.id);
  } else {
    return response.status(500).end();
  }
}
//read list
async function Ready(nomeTable: string, request: Request, response: Response) {
  const { id } = request.params;
  let listData;
  if (id !== undefined) {
    listData = await connection(nomeTable).where("id", id).select("*");
  } else {
    listData = await connection(nomeTable).select("*");
  }
  if (listData !== undefined) {
    return response.status(200).send(listData);
  } else {
    return response.status(500).end();
  }
}
//update edit
async function Update(nomeTable: string, request: Request, response: Response) {
  const { id } = request.params;
  const data = request.body;
  const up = await connection(nomeTable).where("id", id).update(data);
  if (up !== undefined) {
    return response.status(200).send("success");
  } else {
    return response.status(500).end();
  }
}
//delete
async function Delete(nomeTable: string, request: Request, response: Response) {
  const { id } = request.params;
  const verify = await connection(nomeTable)
    .where("id", id)
    .first()
    .then((row) => row);
  if (verify !== undefined) {
    await connection(nomeTable).where("id", id).delete();
    return response.status(200).end();
  } else {
    return response.status(204).end();
  }
}

export { Create, Ready, Update, Delete };
