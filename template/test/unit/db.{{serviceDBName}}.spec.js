"use strict";

const { ServiceBroker } = require("moleculer");
const TestService = require("../../src/db.{{serviceDBName}}.service");
const DbService = require("moleculer-db");

// remove moleculer-elasticsearch-info-exporter
TestService.mixins = [DbService];

describe("Test '{{serviceDBName}}' service", () => {
    let broker = new ServiceBroker();
    broker.createService(TestService);

    beforeAll(() => broker.start());
    afterAll(() => broker.stop());

    describe("Test '{{serviceDBName}}.create' action", () => {
        it("should return the object inserted", async () => {
            expect(
                await broker.call("{{serviceDBName}}.create", {
                    title: "my-title",
                    content: "my-content"
                })
            ).toMatchObject({
                title: "my-title",
                content: "my-content"
            });
        });
    });
});
