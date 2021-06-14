'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Categories',[
     {
       name:"Nodejs"
     },
     {
       name:"Vuejs"
     },
     {
       name:'Reactjs'
     },
     {
       name:'Flutter'
     }
   ]);
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Categories',{},null)
  }
};
