import { Sequelize } from 'sequelize';

const db = new Sequelize('node_ts_restserver', 'root', 'tomy4111', {
  host: 'localhost',
  dialect: 'mysql',
  // logging: false,
});

export default db;
