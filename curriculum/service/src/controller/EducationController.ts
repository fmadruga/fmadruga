import { Request, Response } from 'express';
import { error, success } from '../helpers/responses';
import Education from '../models/education';

export const getEducations = async (request: Request, response: Response) => {
  try {
    const educations = await Education.findAndCountAll();

    return response
      .status(200)
      .json(success({ status: 200, results: educations }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 404, message: 'Internal server error' }));
  }
};

export const createEducation = async (request: Request, response: Response) => {
  try {
    const education = await Education.create(request.body);

    if (!education) {
      return response
        .status(304)
        .json(error({ status: 304, message: 'Error to try create' }));
    }

    return response
      .status(200)
      .json(success({ status: 202, results: education }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 404, message: 'Internal server error' }));
  }
};

export const getEducation = async (request: Request, response: Response) => {
  try {
    const education = await Education.findByPk(request.params.id);

    if (!education) {
      return response
        .status(404)
        .json(error({ status: 404, message: 'Education not found' }));
    }

    return response
      .status(202)
      .json(success({ status: 202, results: education }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 404, message: 'Internal server error' }));
  }
};

export const editEducation = async (request: Request, response: Response) => {
  try {
    const education = await Education.findByPk(request.params.id);

    if (!education) {
      return response
        .status(404)
        .json(error({ status: 404, message: 'Education not found' }));
    }

    const edit = await education.update(request.body);

    if (!edit) {
      return response.status(304).json(
        error({
          status: 304,
          message: 'Erro to try edit education, try again or contact support',
        }),
      );
    }

    return response.status(202).json(success({ status: 202, results: edit }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 404, message: 'Internal server error' }));
  }
};

export const deleteEducation = async (request: Request, response: Response) => {
  try {
    const education = await Education.findByPk(request.params.id);

    if (!education) {
      return response
        .status(404)
        .json(error({ status: 404, message: 'Education not found' }));
    }

    await education.destroy();

    return response
      .status(200)
      .json(success({ status: 204, message: 'Education deleted' }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 500, message: 'Internal server error' }));
  }
};
