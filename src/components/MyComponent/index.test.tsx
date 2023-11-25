import React from "react";
import { render } from "@testing-library/react";
import MyComponent from "@/components/MyComponent";
import { Provider } from "react-redux";
import { store } from "@/store/store";

test("renders MyComponent", () => {
  render(
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
});
