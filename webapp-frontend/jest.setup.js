const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
if (typeof window !== 'undefined') {
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: key => store[key] || null,
      setItem: (key, value) => store[key] = value.toString(),
      removeItem: key => delete store[key],
      clear: () => store = {}
    };
  })();
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
}

