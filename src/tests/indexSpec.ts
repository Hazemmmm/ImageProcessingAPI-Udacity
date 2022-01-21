import supertest from "supertest";
import app from "../app";

const req = supertest(app);

describe("Test API", () => {

  
  it("it should return a message", async () => {
    const res = await req.get("/");
    expect(res.text).toBe(
      "Hello and welcome from Iamge Processing API Udacity Project"
    );
  });

  it("it should return status code 200", async () => {
    const res = await req.get("/");
    expect(res.statusCode).toBe(200);
  });
});
