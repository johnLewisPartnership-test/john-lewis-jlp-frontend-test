export {};

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useRouter } from "next/router";
import ProductDetail from "./[id].page";
import styles from "./[id].module.scss";

// Mock the useRouter hook
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

const mockData = {
    title: "Test Product",
    media: {
        images: {
            urls: ["https://example.com/image.jpg"],
        },
    },
    price: {
        now: "230",
        currency: "USD",
    },
    code: "12345",
    displaySpecialOffer: "Special Offer Text",
    additionalServices: {
        includedServices: ["Service 1", "Service 2"],
    },
    details: {
        productInformation: "This is the product information.",
        features: [
            {
                attributes: [
                    {
                        name: "Feature 1",
                        value: "Value 1",
                    },
                    {
                        name: "Feature 2",
                        value: "Value 2",
                    },
                ],
            },
        ],
    },
};

describe("ProductDetail", () => {
    const useRouterMock = useRouter as jest.Mock;
    const backMock = jest.fn();

    beforeEach(() => {
        useRouterMock.mockReturnValue({
            back: backMock,
        });
    });

    const renderComponent = () => {
        render(<ProductDetail data={mockData} />);
    };

    it("renders the Product code text and product code correctly", () => {
        renderComponent();

        const productCodeElement = screen.getByTestId("product-code");
        expect(productCodeElement).toHaveTextContent(`Product code ${mockData.code}`);
        expect(productCodeElement.tagName).toBe("H4");
    });

    it("renders the Product specification correctly and is an h4 element", () => {
        renderComponent();

        const productSpecElement = screen.getByTestId("product-spec");
        expect(productSpecElement).toBeInTheDocument();
        expect(productSpecElement.tagName).toBe("H4");
    });

    it("toggles Read More/Read Less button text", () => {
        renderComponent();

        const readMoreButton = screen.getByTestId("read-more");
        expect(readMoreButton).toBeInTheDocument();

        fireEvent.click(readMoreButton);
        expect(screen.getByTestId("read-more")).toHaveTextContent("Read Less");

        fireEvent.click(screen.getByTestId("read-more"));
        expect(screen.getByTestId("read-more")).toHaveTextContent("Read more");
    });

    it("shows and hides product information when clicking Read More/Read Less", () => {
        renderComponent();

        const readMoreButton = screen.getByTestId("read-more");
        const productDescriptionContainer = screen.getByTestId("product-description");

        // Initially hidden
        expect(productDescriptionContainer).toHaveClass(styles.productDescriptionHide);

        // Click to show
        fireEvent.click(readMoreButton);
        expect(productDescriptionContainer).toHaveClass(styles.productDescriptionShow);

        // Click to hide again
        fireEvent.click(screen.getByTestId("read-more"));
        expect(productDescriptionContainer).toHaveClass(styles.productDescriptionHide);
    });

    it("navigates back when the back button is clicked", () => {
        renderComponent();

        const backButton = screen.getByTestId("back-button");
        expect(backButton).toBeInTheDocument();

        fireEvent.click(backButton);
        expect(backMock).toHaveBeenCalled();
    });
});
