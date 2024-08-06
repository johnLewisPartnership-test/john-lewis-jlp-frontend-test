import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import { GetServerSidePropsResult } from "next";
import productData from "../mockData/productSearch.json";

interface Props {
    data: {
        products: {
            image: string;
            productId: string;
            title: string;
            variantPriceRange: {
                display: {
                    max: string;
                };
            };
        }[];
    };
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<Props>> {
    const data = productData;
    return {
        props: {
            data: data,
        },
    };
}

const Home = ({ data }: Props) => {
    let items = data?.products.slice(0, 20);
    return (
        <>
            <Head>
                <title>JL &amp; Partners | Home</title>
                <meta name="keywords" content="shopping" />
            </Head>

            <header className={styles.header}>
                <h1>Dishwashers ({items.length})</h1>
            </header>

            <main className={styles.mainWrapper}>
                <section>
                    <ul className={styles.content}>
                        {items.map((item) => (
                            <Link
                                key={item.productId}
                                href={{
                                    pathname: "/product-detail/[id]",
                                    query: { id: item.productId },
                                }}
                            >
                                <a className={styles.link}>
                                    <li>
                                        <div>
                                            <div className={styles.contentImage}>
                                                {/* TODO no useful alt content in data set for image, Content request needed. Removed as decorative */}
                                                <img src={item.image} alt="" style={{ width: "100%" }} />
                                                <h2>{item.title}</h2>
                                                <div className={styles.price}>{item.variantPriceRange.display.max}</div>
                                            </div>
                                        </div>
                                    </li>
                                </a>
                            </Link>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
};

export default Home;
