import React from 'react';

const Faq = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-x-16 mb-14 md:mb-28">
      <h2 className="font-sans-whyteinktrap text-dynamic-h2">FAQ</h2>
      <div className="grid gap-y-8">
        <div>
          <div className="flex items-center gap-x-4">
            <figure>
              <img className="w-8 h-8 object-contain" src="/src/assets/img/about/Rectangle_12_1000x.png" alt="" />
            </figure>
            <h3 className="font-bold text-dynamic-h3">How does your apparel fit?</h3>
          </div>
          <p className="font-mono text-dynamic-description leading-tight">
            Our sizing is unisex. For a more tailored fit, we recommend that you size down.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <figure>
              <img className="w-8 h-8 object-contain" src="/src/assets/img/about/Rectangle_10_1000x.png" alt="" />
            </figure>
            <h3 className="font-bold text-dynamic-h3">Where do you ship?</h3>
          </div>
          <p className="font-mono font-medium text-dynamic-description leading-tight mb-5">
            We currently ship to the following countries: Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech
            Republic, Denmark, Estonia, Finland, France, Greece, Germany, Hungary, Italy, Ireland, Latvia, Lithuania,
            Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, United
            Kingdom, Japan, Canada, and the United States.
          </p>
          <p className="font-mono font-medium text-dynamic-description leading-tight">
            We'll be working with our vendors to expand warehousing and shipping operations so that we can bring The
            Figma Store to more countries in the future. Stay tuned for updates and thank you for your understanding!
          </p>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <figure>
              <img className="w-8 h-8 object-contain" src="/src/assets/img/about/Union_1000x.png" alt="" />
            </figure>
            <h3 className="font-bold text-dynamic-h3">When will I get my order?</h3>
          </div>
          <p className="font-mono font-medium text-dynamic-description leading-tight">
            Your order will ship within 10 business days. You’ll get an e-mail with the tracking info to follow it along
            the way. Shipping timelines will vary based on location, but you can expect your order to arrive 2-10 days
            after shipment.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <figure>
              <img className="w-8 h-8 object-contain" src="/src/assets/img/about/Vector_6_1_1000x.png" alt="" />
            </figure>
            <h3 className="font-bold text-dynamic-h3">What if my package never came?</h3>
          </div>
          <p className="font-mono font-medium text-dynamic-description leading-tight">
            Reach out to thefigmastore@figma.com if you place an order and don’t receive a shipping notice within 5
            business days OR if your order hasn’t arrived 10 days after it has shipped.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <figure>
              <img className="w-8 h-8 object-contain" src="/src/assets/img/about/Rectangle_16_1000x.png" alt="" />
            </figure>
            <h3 className="font-bold text-dynamic-h3 leading-tight">Can I edit or cancel my order once it’s placed?</h3>
          </div>
          <p className="font-mono font-medium text-dynamic-description leading-tight">
            You are unable to edit your order once placed, but if you would like to cancel it, please connect with
            thefigmastore@figma.com.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <figure>
              <img className="w-8 h-8 object-contain" src="/src/assets/img/about/Group_51_1000x.png" alt="" />
            </figure>
            <h3 className="font-bold text-dynamic-h3">How do I contact support?</h3>
          </div>
          <p className="font-mono font-medium text-dynamic-description leading-tight">
            You can contact support by e-mailing thefigmastore@figma.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
