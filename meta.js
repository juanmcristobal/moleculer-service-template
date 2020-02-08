"use strict";

module.exports = function(values) {
  return {
    questions: [
      {
				type: "confirm",
				name: "needDataBase",
				message: "Would you like to use a database?",
				default: false
      },
      {
				type: "input",
				name: "serviceDBName",
        message: "Would you like a name for the database service?",
        when(answers) { return answers.needDataBase; },
				default: "exampledb"
			},
      {
        type: "list",
        name: "database",
        message: "Select a database",
        choices: [
          { name: "Mongo (recommended)", value: "Mongo" },
        ],
        when(answers) { return answers.needDataBase; },
        default: "Mongo"
      },
    ],
    filters: {
      "src/db.*.js": "needDataBase",
      "test/unit/db.*.js": "needDataBase"
		},
    completeMessage: `
To get started:
	cd {{projectName}}
	npm run dev
		`
  };
};
