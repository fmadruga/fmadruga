import { Request, Response } from 'express';
import { error, success } from '../helpers/responses';
import PersonalInfo from '../models/personalinfo';

export const getPersonal = async (request: Request, response: Response) => {
  try {
    const personalInfo = await PersonalInfo.findByPk(1);

    return response.status(200).json(
      success({
        status: 200,
        results: personalInfo,
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

export const editPersonal = async (request: Request, response: Response) => {
  try {
    const personalInfo = await PersonalInfo.findByPk(1);
    const update = await personalInfo?.update(request.body);

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
    return response
      .status(500)
      .json(error({ status: 500, message: 'Internal server error' }));
  }
};
