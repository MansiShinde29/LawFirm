"use client"
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'


export const Teams = () => {
  return (
    <>
    <head>
      <link href='https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css'/>
      <link href='	https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css'/>
    </head>
    <Script src='	https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js'></Script>
    <section className="pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h3 className="mb-3 fw-bold" style={{color : '#1c61f7', }}>Meet Our Attorneys </h3>
        </div>
        <div className="col-6 p-4 ml-4 text-right"> 
        {/* change arrow possitions  */}
          <a
            className="btn btn-primary mb-3 mr-1"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-arrow-left" />
          </a>
          <a
            className="btn btn-primary mb-3 "
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-arrow-right" />
          </a>
        </div>
        <div className="col-12">
          <div
            id="carouselExampleIndicators2"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <Image
                        className="img-fluid"
                        alt="100%x280"
                        src='/img/team-1.jpg'
                        height={300}
                        
                        width={300}/>

                      <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        className="img-fluid"
                        alt="100%x280"
                        src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        className="img-fluid"
                        alt="100%x280"
                        src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        className="img-fluid"
                        alt="100%x280"
                        src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3f317c1f7a16116dec454fbc267dd8e4"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        className="img-fluid"
                        alt="100%x280"
                        src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ebadb044b374504ef8e81bdec4d0e840"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        className="img-fluid"
                        alt="100%x280"
                        src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=0754ab085804ae8a3b562548e6b4aa2e"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        className="img-fluid"
                        alt="100%x280"
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ee8417f0ea2a50d53a12665820b54e23"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        className="img-fluid"
                        alt="100%x280"
                        src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=8ac55cf3a68785643998730839663129"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        className="img-fluid"
                        alt="100%x280"
                        src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=5ee4fd5d19b40f93eadb21871757eda6"
                      />
                      <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">
                          With supporting text below ayyyys a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  
  
  )
}
