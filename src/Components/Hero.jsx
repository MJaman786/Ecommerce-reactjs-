import "./Hero.css"
function Hero() {
    let currentTime = new Date(2025, 9, 30).toLocaleString('en-US', {
        dateStyle: "medium",
        timeStyle: "medium"
    });
    setInterval(() => {
        let myDate = new Date();
        let custDate = myDate.toLocaleString('en-US', {
            dateStyle: "medium",
            timeStyle: "medium"
        })
        let timeContainer = document.querySelectorAll('.time-container')
        for (let index = 0; index < timeContainer.length; index++) {
            timeContainer[index].innerHTML = `<small className="text-warning time-container"><strong>FROM</strong>${custDate}<br/><strong> TILL </strong>${currentTime}</small>`
        }
    }, 100)
    return (
        <>
            <div className="container-fluid carousal-container py-5 px-2 px-sm-2 px-md-3 px-lg-4">
                <div id="carouselExampleSlidesOnly" className="carousel slide mt-5" data-bs-ride="carousel" data-bs-interval="1000" data-bs-pause="false">
                    <div className="carousel-inner">
                        {/* item 1 */}
                        <div className="carousel-item active py-4 px-1">
                            <div className="card mb-3" style={{ maxWidth: "540px;" }}>
                                <div className="row g-0">
                                    <div className="col-4 col-sm-4 col-md-4 text-center d-flex justify-content-center">
                                        <img src="/products/iphone.png" className="img-fluid rounded-start" alt="..." style={{ maxHeight: "300px", objectFit: "contain" }} />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Iphone 16 pro MAX</h5>
                                            <p className="card-text mb-0">5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Black Titanium<br /><strong className="fs-6 season-time">Season ends in ⏰</strong></p>
                                            <p className="card-text"><small className="text-warning time-container"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* item 2 */}
                        <div className="carousel-item py-4 px-1">
                            <div className="card mb-3" style={{ maxWidth: "540px;" }}>
                                <div className="row g-0">
                                    <div className="col-4 col-sm-4 col-md-4 text-center d-flex justify-content-center">
                                        <img src="/products/macbook.png" className="img-fluid rounded-start" alt="..." style={{ maxHeight: "300px", objectFit: "contain" }} />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Apple 2025 MacBook Air</h5>
                                            <p className="card-text mb-0">13-inch, Apple M4 chip with 10-core CPU and 8-core GPU, 16GB Unified Memory, 256GB - Sky Blue<br /><strong className="fs-6 season-time">Season ends in ⏰</strong></p>
                                            <p className="card-text"><small className="text-warning time-container"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* item 3 */}
                        <div className="carousel-item py-4 px-1">
                            <div className="card mb-3" style={{ maxWidth: "540px;" }}>
                                <div className="row g-0">
                                    <div className="col-4 col-sm-4 col-md-4 text-center d-flex justify-content-center">
                                        <img src="/products/oneplusearbuds.png" className="img-fluid rounded-start" alt="..." style={{ maxHeight: "300px", objectFit: "contain" }} />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">OnePlus Nord Buds 2r </h5>
                                            <p className="card-text mb-0">True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upto 38hr case,4-Mic Design, IP55 Rating Deep Grey<br /><strong className="fs-6 season-time">Season ends in ⏰</strong></p>
                                            <p className="card-text"><small className="text-warning time-container"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* item 4 */}
                        <div className="carousel-item py-4 px-1">
                            <div className="card mb-3" style={{ maxWidth: "540px;" }}>
                                <div className="row g-0">
                                    <div className="col-4 col-sm-4 col-md-4 text-center d-flex justify-content-center">
                                        <img src="/products/boatearphones.png" className="img-fluid rounded-start" alt="..." style={{ maxHeight: "300px", objectFit: "contain" }} />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">boAt Rockerz 421</h5>
                                            <p className="card-text mb-0">40Hrs Battery, Low Latency(40Ms), 40Mm Drivers, Enx Technology, Integrated Controls, V5.4 Bluetooth Headphones<br /><strong className="fs-6 season-time">Season ends in ⏰</strong></p>
                                            <p className="card-text"><small className="text-warning time-container"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Hero;