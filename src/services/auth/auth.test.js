import "isomorphic-fetch";
import nock from "nock";
import { signUp } from "./index";

describe("auth", () => {
  describe("signUp", () => {
    it("should sign up user", async () => {
      nock("http://localhost:3001/api")
        .post("/submit", {
          name: "John",
          email: "john@email.com",
          password: "123456",
          color: "blue",
          terms: "on",
        })
        .reply(200);

      await signUp({
        name: "John",
        email: "john@email.com",
        password: "123456",
        color: "blue",
        terms: "on",
      });
    });

    it("should throw error on status 400", async () => {
      nock("http://localhost:3001/api").post("/submit").reply(400);

      let errorResponse;

      try {
        await signUp({});
      } catch (err) {
        errorResponse = err;
      }

      expect(errorResponse).toEqual(new Error("Bad Request"));
    });
  });
});
