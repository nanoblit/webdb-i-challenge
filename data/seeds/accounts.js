exports.seed = function (knex, Promise) {
  return knex('accounts')
    .truncate()
    .then(() => knex('accounts').insert([
      { name: 'account-01', budget: 4000.0 },
      { name: 'account-02', budget: 206.75 },
      { name: 'account-03', budget: 6789.0 },
      { name: 'account-04', budget: 199.99 },
      { name: 'account-05', budget: 22.34 },
      { name: 'account-06', budget: 300.0 },
      { name: 'account-07', budget: 7000.0 },
      { name: 'account-08', budget: 78800.0 },
      { name: 'account-09', budget: 3030.3 },
      { name: 'account-10', budget: 19.56 },
      { name: 'account-11', budget: 19.91 },
      { name: 'account-12', budget: 7080.0 },
      { name: 'account-13', budget: 1234.0 },
    ]));
};
