import Carousel from '../components/Carousel'
import Lottie from 'react-lottie';
import Link from 'next/link'

import { FcIdea } from 'react-icons/fc'
import * as cowAnimation from '../animations/cow.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: cowAnimation.default,
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice'
    // }
};


export default function Home() {
    return (
        <div>
            <div className="p-4 d-flex justify-content-between">
                <div>
                    Hey <span className="font-weight-bold text-healthy">Suresh</span>
                </div>
                <div>
                    {(new Date()).toDateString()}
                </div>
            </div>
            <MilkHealth />
            <div className="row no-gutters px-1">
                <div className="col-6 p-2">
                    <div className="item-shadow p-4">
                        <h6 style={{ fontSize: "0.9rem" }}>Fat percentage</h6>
                        <h1>3.5%</h1>
                    </div>
                </div>
                <div className="col-6 p-2">
                    <div className="item-shadow p-4">
                        <h6 style={{ fontSize: "0.9rem" }}>Milk Yield</h6>
                        <h1>18.8kg</h1>
                    </div>
                </div>
                <div className="col-12 p-2">
                    <div className="item-shadow p-4 row no-gutters">
                        <div className="col-4">
                            <Lottie options={defaultOptions} width="90%" />
                        </div>
                        <div className="col-8">
                            <h6>Cow's Health</h6>
                            <div>Your cow is healthy. Daily physical activity has increased compared to last week.</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-2">
                    <div className="item-shadow p-4 row no-gutters">
                        {/* <div className="col-8">
                            <h5 className="mt-bold">General Information</h5>
                        </div> */}
                        <div>
                            <div><strong>Delivery Date: </strong>{(new Date()).toDateString()}</div>
                            <div><strong>Milk Extraction Date: </strong>{(new Date()).toDateString()}</div>
                            <div><strong>Milk Expiry Date: </strong>{(new Date()).toDateString()}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div className="alert alert-success">
                    <h6 className="mt-bold"><FcIdea className="mb-1" /> Did you know?</h6>
                    <div className="small">One cup of our milk = 7 cups of broccoli, your share of greens and whites for the day!</div>
                </div>
            </div>
            <div className="py-4">
                <Carousel />
            </div>
            <div className="p-3">
                <h3>Love our organic Milk?</h3>
                <p className="font-weight-bold">Subcribe to our weekly/monthly plans to get extra benefits</p>
                <div className="text-center">
                    <Link href="/plans">
                        <a className="btn btn-info">
                            See Plans
                        </a>
                    </Link>
                </div>
            </div>
            <div>
                <img src="/footer.png" width="100%" className="footer-img" />
            </div>
            <style jsx>{`
                .footer-img {
                    filter: hue-rotate(115deg) opacity(0.9);
                }
            `}</style>
        </div>
    );
}


const MilkHealth = () => {
    return (
        <div className="pt-3">
            <div className="health-ring mx-auto d-flex align-items-center justify-content-center">
                <img src="/milk.png" width="70%" />
            </div>
            <div className="text-center pt-4 pt-4 mt-3">
                <h5>Your milk's health is <strong>Excellent!</strong></h5>
                <p className="m-0">It will expire in <strong>4 days</strong></p>
                <div className="alert alert-success mt-2 small d-inline-block">
                    <strong>Tip:</strong> Remember to boil and refrigerate it
                </div>
            </div>
            <style jsx>{`
                @keyframes scaling {
                    0% {
                        transform: scale(1.0);
                    }
                    50% {
                        transform: scale(1.06);
                    }
                    100% {
                        transform: scale(1.0);
                    }
                }
                .health-ring {
                    position: relative;
                    width: 180px;
                    height: 180px;
                    border-radius: 400px;
                    background: white;
                    box-shadow: 0px 0px 1px 4px rgba(0, 98, 90, 0.2),
                                0px 0px 3px 12px rgba(0, 98, 90, 0.1),
                                0px 0px 5px 19px rgba(0, 98, 90, 0.05),
                                0px 0px 9px rgba(0, 98, 90, 0.03),
                                0px 0px 11px rgba(0, 98, 90, 0.01);
                }
                .health-ring img {
                    border-radius: 400px;
                }
                .health-ring:after {
                    content: "";
                    z-index: -1;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: 400px;
                    background: rgba(0, 98, 90, 0.1);
                    box-shadow: 0px 0px 10px 30px rgba(0, 98, 90, 0.1);
                    animation: scaling 2.8s infinite ease-in;
                }
            `}</style>
        </div>
    )
}