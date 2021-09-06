import { linkProvider } from '../providers';
import { ControllerFunction } from '../types';

export interface LinkController {
  create: ControllerFunction;
  getAll: ControllerFunction;
  setScanned: ControllerFunction;
}

export const linkController: LinkController = {
  create: (req, res, next) => {
    const args = req.body;

    linkProvider
      .create(args)
      .then((data) => res.json(data))
      .catch(next);
  },
  setScanned: (req, res, next) => {
    const id = req.params.id;

    linkProvider
      .setScanned(id)
      .then((data) => res.json(data))
      .catch(next);
  },
  getAll: (req, res, next) => {
    linkProvider
      .getAll()
      .then((data) => res.json(data))
      .catch(next);
  },
};
