import { handleSubmit } from "../formHandler";

describe("Testing the submit functionality", () => {
  test("handleSubmit should be defined", async () => {
    const event = { preventDefault: jest.fn() };
    await handleSubmit(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(document.getElementById).toHaveBeenCalledWith("name");
    expect(document.getElementById).toHaveBeenCalledWith("results");
  });
});
