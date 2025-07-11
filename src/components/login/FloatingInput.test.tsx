import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import FloatingInput from "./FloatingInput";

describe("FloatingInput", () => {
    it("renders label and input", () => {
        render(<FloatingInput id="test" label="테스트" value="" />);
        expect(screen.getByLabelText("테스트")).toBeInTheDocument();
    });

    it("shows placeholder on focus", () => {
        render(<FloatingInput id="test" label="테스트" value="" />);
        const input = screen.getByLabelText("테스트");
        fireEvent.focus(input);
        expect(input).toHaveAttribute("placeholder", "테스트");
    });

    it("shows border-gray100(2px) on focus", () => {
        render(<FloatingInput id="test" label="테스트" value="" />);
        const input = screen.getByLabelText("테스트");
        fireEvent.focus(input);
        expect(input.className).toMatch(/border-gray100/);
        expect(input.className).toMatch(/border-2/);
    });

    it("shows error message", () => {
        render(<FloatingInput id="test" label="테스트" value="" error="에러" />);
        expect(screen.getByText("에러")).toBeInTheDocument();
    });

    it("shows remove icon and clears input on click", () => {
        const handleChange = jest.fn();
        render(<FloatingInput id="test" label="테스트" value="abc" onChange={handleChange} />);
        const removeBtn = screen.getByRole("button", { name: /지우기/ });
        fireEvent.click(removeBtn);
        expect(handleChange).toHaveBeenCalled();
    });

    it("shows password toggle icons and toggles type", () => {
        render(<FloatingInput id="pw" label="비밀번호" type="password" value="1234" />);
        const toggleBtn = screen.getByRole("button", { name: /비밀번호 보기/ });
        expect(toggleBtn).toBeInTheDocument();
    });
}); 