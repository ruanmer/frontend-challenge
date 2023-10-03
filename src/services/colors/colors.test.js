import "isomorphic-fetch";
import nock from "nock";
import { fetchColors } from "./index";

describe("colors", () => {
  describe("fetchColors", () => {
    it("should fetch colors", async () => {
      const mockedResponse = ["black", "yellow"];

      nock("http://localhost:3001/api")
        .get("/colors")
        .reply(200, mockedResponse);

      const response = await fetchColors();

      expect(response).toEqual(mockedResponse);
    });
  });
});
