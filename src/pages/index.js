import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">{config.heading}</h1>
        <h3 className="mb-5">
          <em>{config.subHeading}</em>
        </h3>
      </div>
      <div className="overlay"></div>
    </header>

    <section className="content-section bg-light" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>A Visual Novel about the twilight of the Venetian Republic</h2>
            <p className="lead mb-5">
              It is 1715 and the Ottoman once again threaten the Stato da Màr,
              Venetian oversea possessions in the mediteranien. You are pulled
              into the world of the Sangui, vampires, who behind the scenes are
              the real puppetmasters of the Republic.
            </p>
            <Scroll type="id" element="emailCollect" offset={100}>
              <a className="btn btn-dark btn-xl" href="#emailCollect">
                Join the Società Nostra
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>

    <section
      className="content-section bg-dark text-white text-center"
      id="services"
    >
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Features</h3>
          <h2 className="mb-5">What awaits you...</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-clock"></i>
            </span>
            <h4>
              <strong>Extensive</strong>
            </h4>
            <p className="text-faded mb-0">Hours of game play</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-picture"></i>
            </span>
            <h4>
              <strong>Atmospheric</strong>
            </h4>
            <p className="text-faded mb-0">
              Beautifully time-appropriate artworks
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-puzzle"></i>
            </span>
            <h4>
              <strong>Extendible</strong>
            </h4>
            <p className="text-faded mb-0">Create and share own adventures</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-rocket"></i>
            </span>
            <h4>
              <strong>Early Access</strong>
            </h4>
            <p className="text-faded mb-0">Help us make it better!</p>
          </div>
        </div>
      </div>
    </section>

    <section
      className="content-section bg-light text-black text-center"
      id="emailCollect"
    >
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>Join the Società Nostra</h2>
            <p className="lead mb-5">
              Venèxia is still a Work in Progress. If you want to know when
              something happens to his project or to provide feedback down the
              line, please consider leaving your email here.
            </p>

            <link
              href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
              rel="stylesheet"
              type="text/css"
            />
            <div
              style={{
                clear: 'left',
                width: '100%',
              }}
            >
              <form
                action="https://venexia.us8.list-manage.com/subscribe/post?u=63143c4cca9a7c906f891e0ea&amp;id=87eb6528aa"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <div class="input-group mb-3" id="mc_embed_signup_scroll">
                  <input
                    type="email"
                    name="EMAIL"
                    className="email form-control"
                    id="mce-EMAIL"
                    placeholder="email address"
                    required
                  />
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input
                      type="text"
                      name="b_63143c4cca9a7c906f891e0ea_87eb6528aa"
                      tabindex="-1"
                    />
                  </div>
                  <div class="input-group-append">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="btn btn-dark"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="callout">
      <div className="container text-center">
        <h2
          className="mx-auto mb-5 text-white"
          style={{ textShadow: '1px 1px 0 black' }}
        >
          Are you ready to experience <em>your</em> adventure in Venèxia?
        </h2>
        <Scroll type="id" element="emailCollect" offset={100}>
          <a className="btn btn-dark btn-xl" href="#emailCollect">
            Join the Società Nostra
          </a>
        </Scroll>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
