'use client';

import FeatureBlock from '../FeatureBlock';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Two-Factor Authentication',
      description:
        'Secure your account with local login or via Google. For local accounts, email verification is performed through SendGrid to ensure maximum security and prevent unauthorized access. This two-factor approach protects sensitive user data and adds an extra layer of trust to the authentication flow.',
      videoSrc: '/feature-auth.mp4',
      reverse: false,
    },
    {
      title: 'Advanced Admin Dashboard',
      description:
        'Manage everything from a single, powerful dashboard: monitor website statistics, track recent events, publish blog posts, manage services, and validate testimonials. Admins can also add manual data, such as collection metrics or custom statistics, giving full control over the content and analytics of the site.',
      videoSrc: '/feature-dashboard.mp4',
      reverse: true,
    },
    {
      title: 'Blog & News Section',
      description:
        'Create and publish articles dynamically with server-side rendering and slug-based routing for optimal SEO. Each post can include images, metadata, and tags, allowing for rich content presentation while ensuring perfect indexing and discoverability on search engines.',
      videoSrc: '/feature-blog.mp4',
      reverse: false,
    },
  ];

  return (
    <section id="features" className="w-full px-0 md:px-0 py-10 md:py-32">
      <div className="flex flex-col gap-2 md:gap-40 w-full">
        {features.map((feature, index) => (
          <FeatureBlock
            key={index}
            title={feature.title}
            description={feature.description}
            videoSrc={feature.videoSrc}
            reverse={feature.reverse}
          />
        ))}
      </div>
    </section>
  );
}
