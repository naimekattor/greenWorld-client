import React from 'react';
import { Link } from 'react-router';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

// Custom animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Component for the seasonal planting guide
const SeasonalPlantingGuide = () => {
  // Sample seasonal data
  const seasons = [
    {
      name: 'Spring',
      plants: ['Tomatoes', 'Peppers', 'Lettuce', 'Peas'],
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'
    },
    {
      name: 'Summer',
      plants: ['Corn', 'Cucumbers', 'Basil', 'Mint'],
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843'
    },
    {
      name: 'Fall',
      plants: ['Kale', 'Brussels Sprouts', 'Radishes', 'Spinach'],
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    },
    {
      name: 'Winter',
      plants: ['Garlic', 'Winter Squash', 'Onions', 'Carrots'],
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9'
    }
  ];

  return (
    <section className="py-14 max-w-9/12 mx-auto
     bg-white ">
      <div className="garden-container">
        <Reveal keyframes={fadeInUp} duration={1000}>
          <h2 className="text-[40px] text-primary font-bold text-center mt-[60px]">Seasonal Planting Guide</h2>
          <p className="text-accent-primary text-center w-3/4 mx-auto font-normal mb-[30px]">
            Know when to plant what throughout the year for the best results in your garden.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season, index) => (
            <Reveal
              key={season.name}
              keyframes={fadeInLeft}
              duration={800}
              delay={index * 100}
              cascade
            >
              <div className="garden-card overflow-hidden group shadow-lg rounded">
                <div className="relative h-44">
                  <img
                    src={season.image}
                    alt={season.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <h3 className="text-white font-heading text-2xl font-bold p-4">{season.name}</h3>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-semibold mb-3 text-garden-primary">What to Plant:</h4>
                  <ul className="space-y-1 list">
                    {season.plants.map(plant => (
                      <li key={plant} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                        <span>{plant}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/tips" className="text-primary text-[24px] font-medium  bg-secondary px-6 py-4 rounded-full my-6 cursor-pointer">
            Explore Planting Tips
          </Link>
        </div>
      </div>
    </section>
  );
};

// Component for the gardening community stats
const CommunityStats = () => {
  // Sample stats
  const stats = [
    { label: 'Community Members', value: '5,200+' },
    { label: 'Shared Tips', value: '12,750+' },
    { label: 'Plant Species', value: '1,890+' },
    { label: 'Events Hosted', value: '320+' }
  ];

  return (
    <section className="py-14 bg-secondary text-primary">
      <div className="garden-container">
        <Reveal keyframes={fadeInUp} duration={1000}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-center">Growing Together</h2>
          <p className="text-center  mb-12 max-w-2xl mx-auto">
            Join thousands of gardening enthusiasts building a supportive community of knowledge and experience.
          </p>
        </Reveal>

        <div className="md:w-9/12 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              keyframes={fadeInUp}
              duration={800}
              delay={index * 150}
            >
              <div className="bg-white/10 rounded-lg p-6 text-center backdrop-blur-sm border border-white/20  transition-all duration-300">
                <div className="text-4xl font-bold font-heading text-garden-yellow mb-2">{stat.value}</div>
                <div className="">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/auth/register" className="bg-white text-primary  transition-colors duration-300 py-2 px-6 rounded-lg font-medium">
            Join Our Community
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main component that combines both extra sections
const ExtraSections = () => {
  return (
    <>
      <SeasonalPlantingGuide />
      <CommunityStats />
    </>
  );
};

export default ExtraSections;