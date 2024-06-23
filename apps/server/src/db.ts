import { Sequelize, SequelizeOptions } from "sequelize-typescript";

const sequelizeConfig: SequelizeOptions = {
  database: "it_tinder",
  dialect: "postgres",
};

const sequelize = new Sequelize();
