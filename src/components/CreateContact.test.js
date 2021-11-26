import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import CreateContact from './CreateContact';

describe("createContant component", () => {
    const mockChangeValue = jest.fn();
    const initialValues = {
        name: "",
        phone: "",
        email: "",
      };
      it("shows all required input fields with empty values", () => {
        const { getByTestId } = render(
          <CreateContact
            searchValue={initialValues}
            handleChangeValue={mockChangeValue}
          />
        );
        expect(getByTestId("filter-input-name").value).toBe("");
        expect(getByTestId("filter-input-phone").value).toBe("");
        expect(getByTestId("filter-input-email").value).toBe("");

    })

})