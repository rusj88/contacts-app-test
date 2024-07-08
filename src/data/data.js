export const groups = [
  { id: 0, parentGroup: null, title: "Main" },
  { id: 1, parentGroup: 0, title: "Друзья" },
  { id: 2, parentGroup: 0, title: "Семья" },
  { id: 3, parentGroup: 0, title: "Работа" },
  { id: 4, parentGroup: 3, title: "Бухгалтерия" },
  { id: 5, parentGroup: 3, title: "Отдел продаж" },
  { id: 6, parentGroup: 3, title: "Администрация" },
  { id: 7, parentGroup: 5, title: "Менеджеры" },
  { id: 8, parentGroup: 5, title: "Стажеры" },
  { id: 9, parentGroup: 1, title: "Спортзал" },
];

export const contacts = [
  { name: "Ivan Ivanov", id: 1, number: ["555-55-01"], group: 1 },
  { name: "Petr Petrov", id: 2, number: ["555-55-02"], group: 1 },
  { name: "Sidor Sidorov", id: 3, number: ["555-55-03"], group: 1 },
  { name: "Maria Ivanova", id: 4, number: ["553-53-01"], group: 2 },
  { name: "Olga Petrova", id: 5, number: ["553-53-02"], group: 2 },
  { name: "Alexey Smirnov", id: 6, number: ["523-23-01"], group: 3 },
  { name: "Nikolay Kuznetsov", id: 7, number: ["523-23-02"], group: 3 },
  { name: "Sergey Popov", id: 8, number: ["523-23-03"], group: 3 },
  { name: "Elena Sokolova", id: 9, number: ["723-73-01"], group: 4 },
  { name: "Natalia Vasilyeva", id: 10, number: ["723-73-02"], group: 4 },
  { name: "Oleg Novikov", id: 11, number: ["783-78-01"], group: 5 },
  { name: "Dmitry Morozov", id: 12, number: ["783-78-02"], group: 5 },
  { name: "Anna Fedorova", id: 13, number: ["783-78-03"], group: 5 },
  { name: "Igor Mikhailov", id: 14, number: ["753-73-01"], group: 6 },
  { name: "Yulia Orlova", id: 15, number: ["753-73-02"], group: 6 },
  { name: "Konstantin Lebedev", id: 16, number: ["723-73-03"], group: 7 },
  { name: "Vladimir Ivanov", id: 17, number: ["723-73-04"], group: 7 },
  { name: "Valentina Petrova", id: 18, number: ["743-74-01"], group: 8 },
  { name: "Viktor Smirnov", id: 19, number: ["743-74-02"], group: 8 },
  { name: "Andrey Pavlov", id: 20, number: ["555-55-04"], group: 9 },
  { name: "Tatiana Ivanova", id: 21, number: ["555-55-05"], group: 9 },
];

export default { groups, contacts };
