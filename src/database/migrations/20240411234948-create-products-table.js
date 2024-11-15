'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('Products', { 
        
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true, },
      name: {
        type: Sequelize.STRING,
        allowNull: false, },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false },
      category: {
        type: Sequelize.STRING,
        allowNull: false },
      path: {                   // path é o caminho para a Imagem
        type: Sequelize.STRING },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface ) {

    await queryInterface.dropTable('Products');

  }
};
