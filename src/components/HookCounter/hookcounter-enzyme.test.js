import React from "react";
import { shallow } from "enzyme";

import Counter from "./hookcounter";

describe("<Counter />", () => {
  it("properly increments and decrements the counter", () => {
    const setValue = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(initialValue => [initialValue, setValue]);
    const wrapper = shallow(<Counter />);

    wrapper
      .find("button")
      .last()
      .props()
      .onClick();
    expect(setValue).toHaveBeenCalledWith(1);
    // We can't make any assumptions here on the real count displayed
    // In fact, the setCount setter is mocked!

    wrapper
      .find("button")
      .first()
      .props()
      .onClick();
    expect(setValue).toHaveBeenCalledWith(-1);
  });
});
