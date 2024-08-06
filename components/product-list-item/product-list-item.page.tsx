import styles from "./product-list-item.module.scss";

interface Props {
    image: string;
    price: string;
    currency: string;
    includedServices: string[];
    specialOffer: string;
}

const getCurrencySymbol = (currency: string) => {
    switch (currency) {
        case "GBP":
            return "£";
        case "USD":
            return "$";
        case "EUR":
            return "€";
        default:
            return "£"; // Fallback to £
    }
};

const ProductListItem = ({ image, price, currency, includedServices, specialOffer }: Props) => {
    const currencySymbol = getCurrencySymbol(currency);
    return (
        <section className={styles.content}>
            <div className={styles.content__imageWrapper}>
                <img data-testid="product-image" src={image} alt="" className={styles.content__image} />
            </div>

            <div className={styles.content__priceWrapper}>
                <h2 data-testid="product-price" className={styles.price}>
                    {currencySymbol}
                    {price}
                </h2>
                <p className={styles.offer}>{specialOffer}</p>
                <p className={styles.warranty}>{includedServices}</p>
            </div>
        </section>
    );
};

export default ProductListItem;
