import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the submit functionality", () => {
  // Mock the window.alert before all tests run
  beforeAll(() => {
      global.alert = jest.fn();
  });

  // Optionally, you can clean up the mock after all tests
  afterAll(() => {
      global.alert.mockRestore();
  });

  beforeEach(() => {
    // Set up the document body with the form
    document.body.innerHTML = `
      <form id="urlForm">
        <input type="text" id="name" value="http://test.com" />
        <input type="submit" value="Submit" />
      </form>
    `;

    // Re-initialize the event listeners
    const form = document.getElementById('urlForm');
    form.addEventListener('submit', handleSubmit);
  });

  test("Testing the handleSubmit() function", () => {
    const form = document.getElementById('urlForm');
    expect(form).toBeDefined();
    
    // Simulate a submit event
    const event = new Event('submit');
    form.dispatchEvent(event);
    
    // Check if alert was called
    expect(global.alert).toHaveBeenCalledWith("Enter a valid captain name");
  });
});
