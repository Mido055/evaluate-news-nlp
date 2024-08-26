global.document = {
    getElementById: jest.fn((id) => {
      const elements = {
        'name': { value: 'https://example.com' },
        'results': { innerText: '' }
      };
      return elements[id];
    })
  };