import React from "react";
import { shallow } from "enzyme";

import Article from "./Article";

it("should render title", () => {
  const wrapper = shallow(<Article {...props} />);

  expect(wrapper.find(Title).text()).toEqual(props.title);
});
