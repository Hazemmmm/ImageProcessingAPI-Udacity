import app from "../../app";
import supertest from "supertest";

const req = supertest(app);

describe("image processing resize Controller and  middleware", () => {
  it("it should return error when one of the params is mssing", async () => {
    const res = await req.get("/api/images");
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe("Paramater is/are missing");
  });

  it("it should return an error when filename is missing or not a string", async () => {
    const fileName = 4324;
    const height = 100;
    const width = 100;
    const res = await req.get(
      "/api/images?filename=danceforme&width=hello&height=400"
    );
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe("height / width should be a number");
  });

  it("it should return an error when width is missing", async () => {
    const fileName = "ironman";
    const height = 300;
    const width = "hello";
    const res = await req.get(
      `/api/images?filename=${fileName}&height=${height}&width=${width}`
    );

    expect(res.statusCode).toBe(404);
    expect(res.text).toBe("height / width should be a number");
  });

  it("it should return an error when height is missing", async () => {
    const fileName = "ironman";
    const height = "hello";
    const width = 300;
    const res = await req.get(
      `/api/images?filename=${fileName}&height=${height}&width=${width}`
    );

    expect(res.statusCode).toBe(404);
    expect(res.text).toBe("height / width should be a number");
  });
});
