import { format, parse } from 'date-fns';
import { QueryInterface } from 'sequelize';

export const up = async (queryInterface: QueryInterface): Promise<void> => {
  await queryInterface.bulkInsert('personal_info', [
    {
      firstname: 'Fabricio',
      lastname: 'Madruga',
      address: 'Rua Capitão João Zaleski, 842, Lindóia, Curitiba - PR',
      phone_number: '(41) 98867-9615',
      email: 'madruga.fabricio@hotmail.com',
      nationality: 'Brasileiro',
      birthdate: format(
        parse('21/03/1994', 'dd/MM/yyyy', new Date()),
        'yyyy-MM-dd',
      ),
      gender: 'Masculino',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};

export const down = async (queryInterface: QueryInterface): Promise<void> => {
  await queryInterface.bulkDelete('personal_info', {}, {});
};
