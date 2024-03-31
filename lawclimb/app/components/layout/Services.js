import React from "react";
import styles from "../../Services.module.css";
import Link from "next/link"



export const Services= () => {
  return (
    <>
      {/* Services Start */}
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <section className="container pt-2 mb-2">
          <h2 className="h3 block-title text-center">OUR SERVICES</h2>
          <div className="row pt-5 mt-5">
            <div className="col-lg-4 col-sm-6 mb-5 pb-5">
              <Link className={styles.card} href="/Civil">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: 90, height: 90, marginTop: "-45px" }}
                >
                  <i
                    className="fa fa-landmark-dome fa-3x head-icon "
                    style={{}}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Civil Law</h3>
                
                  
                  <p className="card-text text-sm">
                    Civil law is primarily governed by statutes and codes,
                    influenced by British common law traditions and Hindu legal
                    principles. The Indian legal system encompasses a wide range
                    of civil laws covering areas such as contracts, property,
                    family matters, torts, and succession. T
                  </p>
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;
                    <i className="fe-icon-arrow-right" />
                  </span>

                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <Link className={styles.card} href="/Family">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: 90, height: 90, marginTop: "-45px" }}
                >
                  <i className="fa fa-child  fa-3x head-icon" />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Family Law</h3>
                  <p className="card-text text-sm">
                    Family law in India governs matters such as marriage,
                    divorce, adoption, and inheritance.Family courts handle
                    disputes related to family matters, aiming to provide legal
                    resolutions that uphold the rights and obligations of
                    individuals within familial relationships.
                  </p>
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <Link className={styles.card} href="/Business">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: 90, height: 90, marginTop: "-45px" }}
                >
                  <i className="fa fa-gavel fa-3x head-icon" />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Business Law</h3>
                  <p className="card-text text-sm">
                    Business law in India regulates commercial activities,
                    covering areas such as contracts, company formation,
                    intellectual property rights,it includes statutes like the Companies Act,
                    Contract Act and various regulations overseen by government agencies like
                    SEBI and RBI
                  </p>
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;
                    <i className="fe-icon-arrow-right" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <Link className={styles.card} href="/Criminal">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: 90, height: 90, marginTop: "-45px" }}
                >
                  <i class="fa-solid fa-3x head-icon fa-handcuffs"></i>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Criminal Law</h3>
                  <p className="card-text text-sm">
                    Criminal law in India defines offenses and prescribes
                    penalties for acts considered harmful to society. It
                    encompasses statutes like the Indian Penal Code (IPC) and
                    criminal procedure laws. Courts adjudicate criminal cases,
                    aiming to punish offenders while safeguarding the rights of
                    the accused through fair trial procedures.
                  </p>
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;
                    <i className="fe-icon-arrow-right" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <Link className={styles.card} href="/Kids">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: 90, height: 90, marginTop: "-45px" }}
                >
                  <i className="fa fa-baby fa-3x head-icon" />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Kids Law</h3>
                  <p className="card-text text-sm">
                    In India, laws concerning children, often referred to as
                    "child rights" or "juvenile justice," aim to protect minors'
                    welfare, education, and well-being. These laws include
                    provisions from the Juvenile Justice Act and other
                    regulations focused on ensuring the rights, care, and
                    rehabilitation of children.
                  </p>
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;
                    <i className="fe-icon-arrow-right" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <a className={styles.card} href="#">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: 90, height: 90, marginTop: "-45px" }}
                >
                  <i className="fa fa-solid fa-bars fa-3x head-icon" />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">More Info</h3>

                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;
                    <i className="fe-icon-arrow-right" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </>

      {/* Services End */}
    </>
  );
};
export default Services;