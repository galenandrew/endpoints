const BaseModel = require('../classes/database').Model;

const instanceProps = {
  tableName: 'series',
  books: function () {
    return this.hasMany(require('../books'));
  }
};

const classProps = {
  typeName: 'series',
  filters: {
    title: function (qb, value) {
      return qb.whereIn('title', value);
    }
  },
  relations: [
    'books'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
