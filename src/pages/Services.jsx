import React from 'react'
import '../style/_services.scss'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <main>
      <NavBar />
              <section className='cargo'>
            <div>
                <h1>Your cargo is safe with us</h1>
            </div>
            <div className='container'>
                <div className='card'>
                    <h3>Integrity properties</h3>
                    <p>It covers everything from properly packing a unit to choosing
                        the appropriate mode of transport for the load. The
                        responsibility for cargo integrity is usually shared
                        by shippers, 3PLs, logistics providers and carriers, but it's
                        integral to the secure and timely delivery of cargo in the intermodal supply chain.</p>
                </div>
                <div className='card'>
                    <h3>Long-sightedness</h3>
                    <p>Long-sightedness is where you find it hard to see things nearby,
                        but you can see things far away clearly. It's a common
                        condition and wearing glasses or contact lenses can usually correct your vision.
                        Long-sightedness is also known as hypermetropia or hyperopia.</p>
                </div>
                <div className='card'>
                    <h3>challenging staff</h3>
                    <p>Shipping issues such as lost packages, wrong items,
                        or damaged products represent revenue loss, waste of time and
                        resources, and frustration from your customers.
                        There can be a significant source of frustration and financial loss for
                        businesses and individuals.</p>
                </div>
                <div className='card'>
                    <h3>Privacy & safety</h3>
                    <p>Maritime safety is the protection of the crew and passengers aboard vessels,
                        as well as those living or working near
                        bodies of water, from hazards and the risk of injury or fatality.</p>
                </div>
                <div className='card'>
                    <h3>Quality services</h3>
                    <p>QUALITY & SHIPPING is a recognized Chilean company that intervenes locally as
                        “Maritime Operations Advisor”: in Port and
                        Naval services, Energy, Logistics ...</p>
                </div>
                <div className='card'>
                    <h3>Continous</h3>
                    <p>There are different types of freight transportation.
                        Freight, or goods and cargo for shipment, can be transported by
                        air, sea, or land. Choosing the right type for your business
                        is essential to ensure convenient, timely, and accurate
                        delivery of your goods.</p>
                </div>
                <div className='card'>
                    <h3>Innovation solutions</h3>
                    <p>The maritime industry is in the midst of a technological revolution
                        that is reshaping the landscape of sea freight. From
                        autonomous ships and blockchain-enabled supply chains to energy-efficient
                        propulsion systems and smart containers, these
                        innovations are driving efficiency, sustainability, and safety</p>
                </div>
                <div className='card'>
                    <h3>Operational excellence</h3>
                    <p>Operational Excellence (OE) is the systematic implementation of
                        principles and tools designed to enhance organizational
                        performance, and create a culture focused on continuous improvement.</p>
                </div>
            </div>
        </section>
      <Footer />
    </main>
  )
}
