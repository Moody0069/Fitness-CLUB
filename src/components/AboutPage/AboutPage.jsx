import React from 'react';
import './AboutPage.css';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>About Us</h2>
        <p>Welcome to the Fitness CLUB Web Application About Page! We're delighted to provide you with a brief overview of our platform and the mission behind it.</p>

        <h3>Our Mission</h3>
        <p>At Fitness CLUB, our mission is to revolutionize the fitness and wellness experience. We're here to make it easy for you to discover, book, and manage fitness classes, and ultimately, to support you on your journey to a healthier and happier lifestyle.</p>

        <h3>Why Fitness CLUB?</h3>
        <p>We understand that the path to fitness and well-being can be challenging. That's why we've created Fitness CLUB, a user-friendly platform with features like real-time class schedules, user profiles, and secure authentication, all designed to simplify your fitness journey.</p>

        <h3>Join Our Community</h3>
        <p>Fitness CLUB is not just an application; it's a community of like-minded individuals who share a passion for fitness and wellness. Whether you're a seasoned fitness enthusiast or a newcomer, you're welcome to be a part of our community. We believe that together, we can redefine the future of fitness and promote healthier lives.</p>

        <h3>Get Started</h3>
        <p>If you haven't already, sign up for a Fitness CLUB account and explore our platform. We're confident you'll find it to be an invaluable tool on your fitness journey. And remember, we're open to contributions from the open-source community, so if you have ideas to enhance our platform, don't hesitate to get involved.</p>

        <p>Thank you for choosing Fitness CLUB. We're excited to be a part of your fitness adventure.</p>
      </div>
    </div>
  );
}

export default AboutPage;
