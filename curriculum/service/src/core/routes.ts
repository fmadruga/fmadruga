import { Router } from 'express';
import {
  createAbility,
  deleteAbility,
  editAbility,
  getAbilities,
  getAbility,
} from '../controller/AbilityController';
import {
  editAdditionals,
  getAdditionals,
} from '../controller/AdditionalController';
import {
  createEducation,
  deleteEducation,
  editEducation,
  getEducation,
  getEducations,
} from '../controller/EducationController';
import {
  createExperience,
  deleteExperience,
  editExperience,
  getExperience,
  getExperiences,
} from '../controller/ExperienceController';
import {
  editPersonal,
  getPersonal,
} from '../controller/PersonalInfoController';
import { curriculum } from '../controller/PublicController';

const routes: Router = Router();

routes.get('/curriculum', curriculum);

routes.get('/personal', getPersonal);
routes.put('/personal', editPersonal);

routes.get('/experiences', getExperiences);
routes.post('/experience', createExperience);
routes.get('/experience/:id', getExperience);
routes.put('/experience/:id', editExperience);
routes.delete('/experience/:id', deleteExperience);

routes.get('/educations', getEducations);
routes.post('/education', createEducation);
routes.get('/education/:id', getEducation);
routes.put('/education/:id', editEducation);
routes.delete('/education/:id', deleteEducation);

routes.get('/abilities', getAbilities);
routes.post('/ability', createAbility);
routes.get('/ability/:id', getAbility);
routes.put('/ability/:id', editAbility);
routes.delete('/ability/:id', deleteAbility);

routes.get('/additionals', getAdditionals);
routes.put('/additionals', editAdditionals);

export default routes;
