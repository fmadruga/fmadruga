import { Request, Response } from 'express';
import { error, success } from '../helpers/responses';
import Ability from '../models/ability';

export const getAbilities = async (request: Request, response: Response) => {
  try {
    const languages = await Ability.findAndCountAll({
      where: { type: 'LANGUAGE' },
    });
    const tecnologies = await Ability.findAndCountAll({
      where: { type: 'TECNOLOGY' },
    });

    return response.status(200).json(
      success({
        status: 200,
        results: { abilities: { languages, tecnologies } },
      }),
    );
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 500, message: 'Internal server error' }));
  }
};

export const createAbility = async (request: Request, response: Response) => {
  try {
    const ability = await Ability.create(request.body);

    if (!ability) {
      return response
        .status(304)
        .json(error({ status: 304, message: 'Error to try create' }));
    }

    return response
      .status(200)
      .json(success({ status: 202, results: ability }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 500, message: 'Internal server error' }));
  }
};

export const getAbility = async (request: Request, response: Response) => {
  try {
    const ability = await Ability.findByPk(request.params.id);

    if (!ability) {
      return response
        .status(404)
        .json(error({ status: 404, message: 'Ability not found' }));
    }

    return response
      .status(200)
      .json(success({ status: 202, results: ability }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 500, message: 'Internal server error' }));
  }
};

export const editAbility = async (request: Request, response: Response) => {
  try {
    const ability = await Ability.findByPk(request.params.id);

    if (!ability) {
      return response
        .status(404)
        .json(error({ status: 404, message: 'Ability not found' }));
    }

    const edit = await ability.update(request.body);

    if (!edit) {
      return response.status(304).json(
        error({
          status: 304,
          message: 'Erro to try edit ability, try again or contact support',
        }),
      );
    }

    return response.status(200).json(success({ status: 202, results: edit }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 500, message: 'Internal server error' }));
  }
};

export const deleteAbility = async (request: Request, response: Response) => {
  try {
    const ability = await Ability.findByPk(request.params.id);

    if (!ability) {
      return response
        .status(404)
        .json(error({ status: 404, message: 'Ability not found' }));
    }

    await ability.destroy();

    return response
      .status(200)
      .json(success({ status: 204, message: 'Ability deleted' }));
  } catch (err) {
    return response
      .status(500)
      .json(error({ status: 500, message: 'Internal server error' }));
  }
};
