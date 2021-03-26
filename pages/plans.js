import Link from 'next/link'
import { TiChevronLeftOutline } from 'react-icons/ti'

const PLANS = [
    {
        title: "Weekly",
        text: "Get your dose of healthy, nutritious milk right at your doorstep, every day of the week. Simply enter your daily requirement and begin every day with the true taste of milk.",
        pricePrimary: "Rs 455",
        priceSecondary: "/week",
        tagLine: "daily 500ml"
    },
    {
        title: "Monthly",
        text: "Can’t get enough of us? We love you, too. Get an additional 10% discount on your order by committing to a daily dose of wholesome milk. Just tell us how much you need and wake up to farm-fresh milk every morning.",
        pricePrimary: "Rs 1755",
        priceSecondary: "/month",
        tagLine: "daily 500ml"
    },
]

export default function Home() {
    return (
        <div className="back">
            <div className="p-4 d-flex justify-content-between">
                <Link href="/">
                    <a>
                        <span className="font-weight-bold text-healthy"><TiChevronLeftOutline className="mb-1" />Home</span>
                    </a>
                </Link>
            </div>
            <div className="p-3">
                {PLANS && PLANS.map((plan, index) => 
                    <div className="p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="m-0 mt-bold">{plan.title}</h4>
                            <div className="d-flex align-items-end">
                                <h5 className="m-0 mt-bold">{plan.pricePrimary}</h5>
                                <span className="m-0 small">{plan.priceSecondary}</span>
                            </div>
                        </div>
                        <div className="divider mb-2"></div>
                        <p>{plan.text}</p>
                    </div>
                )}
            </div>
            <h5 className="p-2 text-center mt-bold mb-5">
                The true taste of milk, delivered to your doorstep, every morning!
            </h5>
            <style jsx>{`
                .footer-img {
                    filter: hue-rotate(115deg) opacity(0.9);
                }
                .back {
                    
                }
                .back:after {
                    content: "";
                    background-image: url('/background.jpg');
                    background-size: cover;
                    opacity: 0.06;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    position: absolute;
                    z-index: -1; 
                }
            `}</style>
        </div>
    );
}
