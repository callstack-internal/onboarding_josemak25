jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native"); // use original implementation, which comes with mocks out of the box

  // mock modules/components created by assigning to NativeModules
  RN.NativeModules.SourceCode = {
    scriptURL: "http://localhost:3000/",
  };

  return RN;
});
