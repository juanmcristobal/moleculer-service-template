"use strict";

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;
const TestService = require("../../src/{{projectName}}.service");

// remove moleculer-elasticsearch-info-exporter
TestService.mixins = [];

describe("Test 'greeter' service", () => {
    let broker = new ServiceBroker();
    broker.createService(TestService);

    beforeAll(() => broker.start());
    afterAll(() => broker.stop());

    describe("Test '{{projectName}}.hello' action", () => {
        it("should return with 'Hello Moleculer'", () => {
            expect(broker.call("{{projectName}}.hello")).resolves.toBe(
                "Hello Moleculer"
            );
        });
    });

    describe("Test '{{projectName}}.welcome' action", () => {
        it("should return with 'Welcome'", () => {
            expect(
                broker.call("{{projectName}}.welcome", { name: "Adam" })
            ).resolves.toBe("Welcome, Adam");
        });

        it("should reject an ValidationError", () => {
            expect(broker.call("{{projectName}}.welcome")).rejects.toBeInstanceOf(
                ValidationError
            );
        });
    });
});
