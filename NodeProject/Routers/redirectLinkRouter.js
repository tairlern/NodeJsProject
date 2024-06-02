import express from "express";

import redirectLinkController from "../Controllers/redirectLinkController.js";


const redirectLinkRouter = express.Router()

// redirectLinkRouter.get('/', redirectLinkController.getList)

redirectLinkRouter.get('/:id',redirectLinkController.getById)

// redirectLinkRouter.post('/', redirectLinkController.add)

// redirectLinkRouter.put('/:id', redirectLinkController.update)

// redirectLinkRouter.delete('/:id', redirectLinkController.delete)

export default redirectLinkRouter