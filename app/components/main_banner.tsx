import React from 'react';

interface MainBannerProps {
  url?: string;
}


const MainBanner: React.FC<MainBannerProps> = ({
  url
}) => {
  return (
    <section className="flex flex-1 bg-[var(--color-card-bg)] text-[var(--color-text-primary)] rounded-3xl font-sans">
      <img
        src={url}
        alt={`Main banner`}
        className="w-full h-full rounded-3xl object-cover bg-[var(--color-tag-bg)]"
      />
    </section>
  );
};

export default MainBanner;