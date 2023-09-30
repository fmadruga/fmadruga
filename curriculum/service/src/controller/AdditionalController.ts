import { Request, Response } from 'express';
import { error, success } from '../helpers/responses';
import AdditionalInfo from '../models/additionalinfo';

export const getAdditionals = async (request: Request, response: Response) => {
  try {
    const [additionals, created] = await AdditionalInfo.findOrCreate({
      where: { id: 1 },
      defaults: {
        available_to_travel: false,
        available_to_move: false,
        drive_license: false,
      },
    });

    return response.status(200).json(
      success({
        status: 200,
        results: { additionals, created: created },
      }),
    );
  } catch (err) {
    return response.status(500).json(
      error({
        status: 500,
        message: 'Internal server error',
        errors: { err },
      }),
    );
  }
};

export const editAdditionals = async (request: Request, response: Response) => {
  try {
    const additionals = await AdditionalInfo.findByPk(1);
    const update = await additionals?.update(request.body);

    if (!update) {
      return response.status(304).json(
        error({
          status: 304,
          message: 'Error to try update info, try again or contact support',
        }),
      );
    }

    return response.status(202).json(success({ status: 202, results: update }));
  } catch (err) {
    return response.status(500).json(
      error({
        status: 500,
        message: 'Internal server error',
        errors: { err },
      }),
    );
  }
};
