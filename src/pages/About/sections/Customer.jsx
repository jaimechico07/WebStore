import React from 'react';

const Customer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-x-16 mb-14 md:mb-28">
      <h2 className="font-sans-whyteinktrap text-dynamic-h2">CUSTOMER CARE</h2>
      <div className="grid gap-y-8">
        <div>
          <div className="flex items-center gap-x-4">
            <figure>
              <img className="w-8 h-8 object-contain" src="/assets/img/about/red-wave_1000x.png" alt="" />
            </figure>
            <h3 className="font-bold text-dynamic-h3">Shipping</h3>
          </div>
          <p className="font-mono font-medium text-dynamic-description leading-tight mb-5">
            Once you’ve made a purchase, an e-mail confirmation will be sent to the e-mail address you provided. This
            e-mail acts as an invoice and includes your order number.
          </p>
          <p className="font-mono font-medium text-dynamic-description leading-tight mb-5">
            Once your order is placed, it’ll ship from our warehouse within 2-5 business days. Orders placed after 11:00
            AM(EST) may be processed the next business day, and orders placed on weekends and holidays will be processed
            the following business day starting at 8:00 AM(EST). During peak periods, processing times may exceed 2
            business days.
          </p>
          <p className="font-mono font-medium text-dynamic-description leading-tight">
            Depending on your location, your order will be shipping from the United Kingdom, Ireland, or the United
            States. You will not need to pay customs on your orders. Once your order has been shipped, you will receive
            an e-mail with your shipment’s tracking information, allowing you to keep tabs on the progress of your
            delivery.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <figure>
              <img className="w-8 h-8 object-contain" src="/assets/img/about/Rectangle_10_1000x.png" alt="" />
            </figure>
            <h3 className="font-bold text-dynamic-h3">Returns</h3>
          </div>
          <p className="font-mono font-medium text-dynamic-description leading-tight">
            We currently do not accept returns and are unable to edit your order once placed. If you would like to
            cancel your order and replace it with a new one before it has shipped, please connect with
            thefigmastore@figma.com.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <figure>
              <img className="w-8 h-8 object-contain" src="/assets/img/about/Rectangle_12_1000x.png" alt="" />
            </figure>
            <h3 id="#contact" className="font-bold text-dynamic-h3">
              Contact Us
            </h3>
          </div>
          <p className="font-mono font-medium text-dynamic-description leading-tight">
            You can contact support by emailing thefigmastore@figma.com.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Customer;
