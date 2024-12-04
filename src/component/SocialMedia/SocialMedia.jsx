import React from 'react';
import Image from '../../layer/Image';

const SocialMedia = () => {
  const cards = [
    {
      image: '/assets/SocialMedia/in01.svg',
      description:
        "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      date: '01/01/2023',
    },
    {
      image: '/assets/SocialMedia/in02.svg',
      description:
        "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      date: '01/01/2023',
    },
    {
      image: '/assets/SocialMedia/im03.svg',
      description:
        "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      date: '01/01/2023',
    },
    {
      image: '/assets/SocialMedia/in04.svg',
      description:
        "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      date: '01/01/2023',
    },
    {
      image: '/assets/SocialMedia/in05.svg',
      description:
        "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      date: '01/01/2023',
    },
    {
      image: '/assets/SocialMedia/in06.svg',
      description:
        "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      date: '01/01/2023',
    },
    {
      image: '/assets/SocialMedia/in07.svg',
      description:
        "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      date: '01/01/2023',
    },
    {
      image: '/assets/SocialMedia/in08.svg',
      description:
        "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      date: '01/01/2023',
    },
    {
      image: '/assets/SocialMedia/in09.svg',
      description:
        "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
      date: '01/01/2023',
    },
   
 
   
  ];

  return (
    <div className=" hidden md:block py-4 md:pl-0 pl-3">
      <h2 className="text-2xl font-Poppins font-semibold text-black text-[22px] mb-6">
        Follow us on Social Media for News, Offers & More
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md w-[238px] rounded-md overflow-hidden"
          >
            <Image
              src={card.image}
              alt="Social Media Post"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center w-[238px] font-Poppins ">
              <p className="text-sm text-black">{card.description}</p>
              <p className="mt-4 text-xs text-gray-500">{card.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
