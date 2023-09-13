'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('books', [
    {
      name: 'Hobbit',
      author: 'J.RR.',
      year_published: 1937
    },
    {
      name: 'Harry Potter',
      author: 'J.K.Rowling',
      year_published: 1997
    },
    {
      name: 'Gatsby',
      author: 'Fitzgerald',
      year_published: 1925
    },
    {
      name: '1984',
      author: 'Orwell',
      year_published: 1949
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
