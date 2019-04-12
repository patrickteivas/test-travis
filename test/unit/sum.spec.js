const sum = require("../../src/sum");

describe("sum", () => {
	it("25 + 75 = 100", () => {
		expect(sum(25, 75)).toBe(100);
	});
});
