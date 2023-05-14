import React, { useEffect } from 'react';
import './Services.css';

function Services() {
	// This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('show')
					}
				})
			})
		
			const hiddenElements = document.querySelectorAll('.hidden');
		
			hiddenElements.forEach((el) => observer.observe(el));
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <div className="services-container">
			<div className='services-content'>
				<h2 className='services-heading'>What We Do</h2>
				<div className="services-grid">
						<div className="service hidden">
							<img className="service-icon" src='https://cdn.midjourney.com/1601d4ec-f060-449a-bf78-6ab0f310c6f9/grid_0.png' alt='Wiring' />
							<div className='services-text'>
								<h3 className="service-name">Wiring</h3>
								<p className="service-description"><span className='highlighted'>Expert wiring services for your home or business</span>, including electrical panel upgrades and <span className='highlighted'></span>rewiring of existing systems.</p>
							</div>
						</div>
            <div className="service hidden">
							<img className="service-icon" src='https://cdn.discordapp.com/attachments/1086121832370946048/1103578950904586250/Sah7j_Electrician_installing_light_fixtures_in_a_modern_house_p_d68dfec3-38cc-4826-9f55-be36aa99c1e4.png' alt='Wiring' />
							<div className='services-text'>
								<h3 className="service-name">Lighting</h3>
								<p className="service-description">We specialize in <span className='highlighted'>installing and repairing lighting fixtures</span>, both indoors and outdoors. We also offer energy-efficient lighting solutions.</p>
							</div>
						</div>
            <div className="service hidden">
							<img className="service-icon" src='https://cdn.midjourney.com/f2baafb3-f6a4-4481-b9eb-36f1fcaabc32/0_1.png' alt='Wiring' />
							<div className='services-text'>
								<h3 className="service-name">Repair</h3>
								<p className="service-description"><span className='highlighted'>Reliable and affordable repair services</span> for all types of electrical problems, from circuit breakers to wiring issues.</p>
							</div>
						</div>
            <div className="service hidden">
							<img className="service-icon" src='https://cdn.midjourney.com/53e1968b-c459-429a-904d-db56448ee17c/0_1.png' alt='Wiring' />
							<div className='services-text'>
								<h3 className="service-name">Installation</h3>
								<p className="service-description">We install a variety of electrical devices and appliances, including <span className='highlighted'>ceiling fans, smoke detectors</span>, and more.</p>
							</div>
						</div>
            <div className="service hidden">
							<img className="service-icon" src='https://cdn.discordapp.com/attachments/1086121832370946048/1107068446224687215/Sah7j_electritian_performing_electrical_inspection_for_a_home_t_5c98d75f-099d-4e5a-b099-d59ce324d979.png' alt='Wiring' />
							<div className='services-text'>
								<h3 className="service-name">Inspection</h3>
								<p className="service-description">Thorough electrical inspections to ensure your <span className='highlighted'>home or business is safe</span> and up to code.</p>
							</div>
						</div>
            <div className="service hidden">
							<img className="service-icon" src='https://cdn.midjourney.com/0c9a9bec-f825-493a-93fd-930fc37e41cf/0_1.png' alt='Wiring' />
							<div className='services-text'>
								<h3 className="service-name">Maintenance</h3>
								<p className="service-description">Regular maintenance services to keep your electrical system running smoothly and <span className='highlighted'>prevent future problems</span>.</p>
							</div>
						</div>
				</div>
			</div>
    </div>
  );
}

export default Services;
