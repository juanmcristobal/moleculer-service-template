"use strict";
const InfoNodeExporter = require("moleculer-elasticsearch-info-exporter");
const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const mongoose = require("mongoose");

module.exports = {
    name: "{{serviceDBName}}",

    mixins: [InfoNodeExporter, DbService],
    {{#if_eq database "Mongo"}}
    adapter: new MongooseAdapter("mongodb://localhost/moleculer-demo"),
    model: mongoose.model(
        "RenameModel",
        mongoose.Schema({
            title: { type: String },
            content: { type: String },
            votes: { type: Number, default: 0 }
        })
    )
    {{/if_eq}}  
};
