export {};

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductListItem from "./product-list-item.page";

it("renders the product price with correct symbol and amount", () => {
    const currencySymbol = "$";
    const price = "230";
    const additionalServices = {
        includedServices: ["Service 1", "Service 2"], // Proper initialization
    };
    const specialOffer = "test";

    render(<ProductListItem image="" includedServices={additionalServices.includedServices} price={price} currency="USD" specialOffer={specialOffer} />);
    const priceElement = screen.getByTestId("product-price");
    expect(priceElement).toBeInTheDocument();
    expect(priceElement).toHaveTextContent(`${currencySymbol}${price}`);
    expect(priceElement.tagName).toBe("H2");
});

it("renders the correct currency symbol for USD", () => {
    const currencySymbol = "$";
    const price = "50";
    const additionalServices = {
        includedServices: ["Service 1", "Service 2"], // Proper initialization
    };
    const specialOffer = "test";

    render(<ProductListItem image="" price={price} currency="USD" includedServices={additionalServices.includedServices} specialOffer={specialOffer} />);
    const priceElement = screen.getByTestId("product-price");
    expect(priceElement).toHaveTextContent(`${currencySymbol}${price}`);
});

it("renders the correct currency symbol for EUR", () => {
    const currencySymbol = "€";
    const price = "75";
    const additionalServices = {
        includedServices: ["Service 1", "Service 2"], // Proper initialization
    };
    const specialOffer = "test";

    render(<ProductListItem image="" price={price} currency="EUR" includedServices={additionalServices.includedServices} specialOffer={specialOffer} />);
    const priceElement = screen.getByTestId("product-price");
    expect(priceElement).toHaveTextContent(`${currencySymbol}${price}`);
});

it("renders the correct currency symbol for GBP", () => {
    const currencySymbol = "£";
    const price = "100";
    const additionalServices = {
        includedServices: ["Service 1", "Service 2"],
    };
    const specialOffer = "test";

    render(<ProductListItem image="" price={price} currency="GBP" includedServices={additionalServices.includedServices} specialOffer={specialOffer} />);
    const priceElement = screen.getByTestId("product-price");
    expect(priceElement).toHaveTextContent(`${currencySymbol}${price}`);
});
