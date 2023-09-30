import { Request, Response } from 'express';
import { error, success } from '../helpers/responses';
import Experience from '../models/experience';

export const getExperiences = async (request: Request, response: Response) => {
  try {
    const experiences = await Experience.findAndCountAll();

    return response
      .status(202)
      .json(success({ status: 202, results: experiences }));
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

export const createExperience = async (
  request: Request,
  response: Response,
) => {
  try {
    const experience = await Experience.create(request.body);

    if (!experience) {
      return response.status(500).json(
        error({
          status: 500,
          message: 'Internal server error',
        }),
      );
    }

    return response.status(202).json(
      success({
        status: 202,
        message: 'Experience created',
        results: experience,
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

export const getExperience = async (request: Request, response: Response) => {
  try {
    const experience = await Experience.findByPk(request.params.id);

    if (!experience) {
      return response
        .status(404)
        .json(error({ status: 404, message: 'Experience not found' }));
    }

    return response
      .status(202)
      .json(success({ status: 202, results: experience }));
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

export const editExperience = async (request: Request, response: Response) => {
  try {
    const experience = await Experience.findByPk(request.params.id);

    if (!experience) {
      return response
        .status(404)
        .json(error({ status: 404, message: 'Experience not found' }));
    }

    const edit = await experience.update(request.body);

    if (!edit) {
      return response.status(304).json(
        error({
          status: 304,
          message: 'Erro to try edit expirence, try again or contact support',
        }),
      );
    }

    return response.status(202).json(success({ status: 202, results: edit }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 500, message: 'Internal server error' }));
  }
};

export const deleteExperience = async (
  request: Request,
  response: Response,
) => {
  try {
    const experience = await Experience.findByPk(request.params.id);

    if (!experience) {
      return response
        .status(404)
        .json(error({ status: 404, message: 'Experience not found' }));
    }

    await experience.destroy();

    return response
      .status(200)
      .json(success({ status: 204, message: 'Experience deleted' }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 500, message: 'Internal server error' }));
  }
};
