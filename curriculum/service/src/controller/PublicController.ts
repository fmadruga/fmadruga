import { Request, Response } from 'express';
import { error, success } from '../helpers/responses';
import Ability from '../models/ability';
import AdditionalInfo from '../models/additionalinfo';
import Education from '../models/education';
import Experience from '../models/experience';
import PersonalInfo from '../models/personalinfo';

export const curriculum = async (request: Request, response: Response) => {
  try {
    const personalInfo = await PersonalInfo.findByPk(1);
    const experiences = await Experience.findAndCountAll();
    const educations = await Education.findAndCountAll();
    const languages = await Ability.findAndCountAll({
      where: { type: 'LANGUAGE' },
    });
    const tecnologies = await Ability.findAndCountAll({
      where: { type: 'TECNOLOGY' },
    });
    const additionals = await AdditionalInfo.findByPk(1);

    response.status(200).json(
      success({
        status: 200,
        results: {
          personal: personalInfo,
          experiences: experiences,
          education: educations,
          abilities: { languages: languages, tecnologies: tecnologies },
          additionals: additionals,
        },
      }),
    );
  } catch (err) {
    response.status(500).json(
      error({
        status: 500,
        message: 'Internal server error',
        errors: { err },
      }),
    );
  }
};
