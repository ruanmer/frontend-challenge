import { validateEmail } from "./index";

describe("validator", () => {
  describe("validateEmail", () => {
    it("should validate email", () => {
      expect(validateEmail("email@test.com")).toBe(true);
      expect(validateEmail("emailtest.com")).toBe(false);
      expect(validateEmail("email@@test.com")).toBe(false);
      expect(validateEmail("email@testcom")).toBe(false);
      expect(validateEmail("@test.com")).toBe(false);
      expect(validateEmail("email@.com")).toBe(false);
    });
  });
});
