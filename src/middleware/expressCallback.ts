import { Request, Response } from "express";

/*
- receives req and res as inputs from Express
- creates a clean request object with all possible useful information needed by controllers
- handles whatever it's returned by controllers
*/

export default (controller) => (req: Request, res: Response) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path,
    source: {
      ip: req.ip,
      browser: req.get("User-Agent"),
    },
    headers: {
      "Content-Type": req.get("Content-Type"),
      Referer: req.get("referer"),
      "User-Agent": req.get("User-Agent"),
    },
  };
  controller(httpRequest)
    .then((httpResponse) => {
      res.set("Content-Type", "application/json");
      res.type("json");
      res.status(httpResponse.statusCode).send(httpResponse.body);
    })
    .catch((e: Error) => {
      res.status(400).send({
        success: false,
        code: 400,
        error: {
          description: e.message,
        },
      });
    });
};
