exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("classes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        { id: 1, cohort_id: 2, date: "2020-09-28", online_class: true },
        { id: 2, cohort_id: 2, date: "2020-11-20", online_class: true },
        { id: 3, cohort_id: 3, date: "2020-07-21", online_class: true },
        { id: 4, cohort_id: 1, date: "2020-12-09", online_class: true },
        { id: 5, cohort_id: 1, date: "2020-12-26", online_class: true },
        { id: 6, cohort_id: 3, date: "2021-01-02", online_class: true },
        { id: 7, cohort_id: 3, date: "2020-11-03", online_class: true },
        { id: 8, cohort_id: 1, date: "2020-07-27", online_class: true },
        { id: 9, cohort_id: 4, date: "2021-05-04", online_class: true },
        { id: 10, cohort_id: 3, date: "2020-11-01", online_class: true },
        { id: 11, cohort_id: 2, date: "2021-05-01", online_class: true },
        { id: 12, cohort_id: 4, date: "2020-12-09", online_class: true },
        { id: 13, cohort_id: 2, date: "2020-10-22", online_class: true },
        { id: 14, cohort_id: 2, date: "2020-10-04", online_class: true },
        { id: 15, cohort_id: 2, date: "2020-11-08", online_class: true },
        { id: 16, cohort_id: 3, date: "2021-03-19", online_class: true },
        { id: 17, cohort_id: 3, date: "2020-12-16", online_class: true },
        { id: 18, cohort_id: 4, date: "2020-09-26", online_class: true },
        { id: 19, cohort_id: 2, date: "2020-12-03", online_class: true },
        { id: 20, cohort_id: 2, date: "2021-04-22", online_class: true },
        { id: 21, cohort_id: 3, date: "2020-11-11", online_class: true },
        { id: 22, cohort_id: 3, date: "2020-12-09", online_class: true },
        { id: 23, cohort_id: 4, date: "2021-02-15", online_class: true },
        { id: 24, cohort_id: 3, date: "2021-05-03", online_class: true },
        { id: 25, cohort_id: 1, date: "2021-05-05", online_class: true },
        { id: 26, cohort_id: 3, date: "2020-12-12", online_class: true },
        { id: 27, cohort_id: 4, date: "2020-08-06", online_class: true },
        { id: 28, cohort_id: 4, date: "2021-04-09", online_class: true },
        { id: 29, cohort_id: 1, date: "2020-10-15", online_class: true },
        { id: 30, cohort_id: 1, date: "2020-08-03", online_class: true },
        { id: 31, cohort_id: 3, date: "2021-01-27", online_class: true },
        { id: 32, cohort_id: 1, date: "2021-01-02", online_class: true },
        { id: 33, cohort_id: 1, date: "2020-10-20", online_class: true },
        { id: 34, cohort_id: 2, date: "2020-11-29", online_class: true },
        { id: 35, cohort_id: 4, date: "2021-01-01", online_class: true },
        { id: 36, cohort_id: 4, date: "2020-08-19", online_class: true },
        { id: 37, cohort_id: 1, date: "2020-12-17", online_class: true },
        { id: 38, cohort_id: 4, date: "2020-11-14", online_class: true },
        { id: 39, cohort_id: 1, date: "2020-12-21", online_class: true },
        { id: 40, cohort_id: 1, date: "2021-04-09", online_class: true },
        { id: 41, cohort_id: 2, date: "2021-02-23", online_class: true },
        { id: 42, cohort_id: 2, date: "2020-11-07", online_class: true },
        { id: 43, cohort_id: 3, date: "2021-01-21", online_class: true },
        { id: 44, cohort_id: 4, date: "2021-06-19", online_class: true },
        { id: 45, cohort_id: 1, date: "2021-04-27", online_class: true },
        { id: 46, cohort_id: 4, date: "2021-04-16", online_class: true },
        { id: 47, cohort_id: 3, date: "2020-08-10", online_class: true },
        { id: 48, cohort_id: 3, date: "2020-12-20", online_class: true },
        { id: 49, cohort_id: 2, date: "2021-04-18", online_class: true },
        { id: 50, cohort_id: 3, date: "2021-02-09", online_class: true },
      ]);
    });
};
