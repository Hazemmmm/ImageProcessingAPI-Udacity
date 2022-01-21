import sharpResize from "../../routes/sharpResize";

describe("Sharp ResizeImage", () => {
  it("should return error if the filename doesnt exist", async () => {
    const fileName = "ironman";
    const height = 100;
    const width = 100;
    const resizedImgPath = `./public/${fileName}${height}x${height}.jpg`;

    const res = await sharpResize(fileName, height, width);
    res.toFile(resizedImgPath, (err: Error) => {
      expect(err.message).toBeDefined();
    });
  });

  it("it should be resolved Successfully!", async () => {
    await expectAsync(sharpResize("ironman", 500, 500)).toBeResolved();
  });
});
