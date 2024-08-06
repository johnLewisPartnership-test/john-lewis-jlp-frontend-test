import React, { useEffect, useState } from "react";
//TODO ProductCarousel
import ProductListItem from "../../components/product-list-item/product-list-item.page";
import productDetailData from "../../mockData/product-detail-5561997.json";

import { GetServerSidePropsResult } from "next";
import { useRouter } from "next/router";
import styles from "./[id].module.scss";

interface Props {
    data: {
        title: string;
        media: {
            images: {
                urls: string[];
            };
        };
        price: {
            now: string;
            currency: string;
        };
        code: string;
        displaySpecialOffer: string;
        additionalServices: {
            includedServices: string[];
        };
        details: {
            productInformation?: string;
            features: {
                attributes: {
                    name: string;
                    value?: string;
                }[];
            }[];
        };
    };
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<Props>> {
    const data = productDetailData;
    return {
        props: {
            data: data,
        },
    };
}

const ProductDetail = ({ data }: Props) => {
    const router = useRouter();

    const [isReadMore, setIsReadMore] = useState(false);

    const ReadMoreButton = () => {
        setIsReadMore((prevIsReadMore) => !prevIsReadMore);
    };

    useEffect(() => {
        document.title = `${data.title} - JL & Partners`;
    }, [data.title]);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerInnerWrapper}>
                    <button data-testid="back-button" className={styles.back} onClick={() => router.back()}>
                        <span className={styles.backHidden}>Back</span>
                    </button>
                    <h1>{data.title}</h1>
                </div>
            </header>

            <main className={styles.mainWrapper}>
                {/* <ProductCarousel images={data.media.images.urls} /> */}

                <div className={styles.outerBorder}>
                    <ProductListItem
                        image={data.media.images.urls[0]}
                        price={data.price.now}
                        currency={data.price.currency}
                        specialOffer={data.displaySpecialOffer}
                        includedServices={data.additionalServices.includedServices}
                    />
                </div>
                <section className={styles.productContentWrapper}>
                    <div className={styles.productInfo}>
                        <h3>Product information</h3>
                        <h4 data-testid="product-code">Product code {data.code}</h4>
                        {data.details.productInformation && (
                            <div
                                id="product-content"
                                data-testid="product-description"
                                className={`${styles.productDescription} ${isReadMore ? styles.productDescriptionShow : styles.productDescriptionHide}`}
                                dangerouslySetInnerHTML={{ __html: data.details.productInformation }}
                            />
                        )}

                        <button aria-expanded={isReadMore ? "false" : "true"} aria-controls="product-content" data-testid="read-more" className={styles.readMoreButton} onClick={ReadMoreButton}>
                            {isReadMore ? "Read Less" : "Read more"}
                            <span className={styles.readMoreButtonArrow}></span>
                        </button>
                    </div>
                    <div className={styles.productSpecListWrapper}>
                        <h4 data-testid="product-spec">Product specification</h4>
                        <ul>
                            {data.details.features[0].attributes.map((item) => (
                                <li className={styles.productSpecList} key={item.name}>
                                    <div className={styles.productSpecList__left}>{item.name}</div>
                                    <div className={styles.productSpecList__right}>{item.value}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProductDetail;
