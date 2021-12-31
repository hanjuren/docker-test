'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      nick_name: '한주련',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
    await queryInterface.bulkInsert('posts', [
      {
        title: 'sample title1',
        content: 'sample content1',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'sample title2',
        content: 'sample content2',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
