import Image from 'next/image';
import React from 'react';

const TeamEducation = () => {
    const teamData = [
        {
            name: 'Melissa Jones',
            designation: 'Professor',
            imageShape: 'https://nextgenes.edu.vn/img/team/team-shape-1.png',
            imageSrc: 'https://api.nextgenes.edu.vn/storage/team-sm-1.webp',
            description:
                'Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car',
        },
        {
            name: 'Morgan Key',
            designation: 'Teacher MBA',
            imageShape: 'https://nextgenes.edu.vn/img/team/team-shape-2.png',
            imageSrc: 'https://api.nextgenes.edu.vn/storage/team-sm-2.webp',
            description:
                'Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car',
        },
        {
            name: 'Andra Flatcher',
            designation: 'Lead Teacher',
            imageShape: 'https://nextgenes.edu.vn/img/team/team-shape-1.png',
            imageSrc: 'https://api.nextgenes.edu.vn/storage/team-sm-1.webp',
            description:
                'Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car',
        },
        {
            name: 'Oliver Porter',
            designation: 'Photographer',
            imageShape: 'https://nextgenes.edu.vn/img/team/team-shape-1.png',
            imageSrc: 'https://api.nextgenes.edu.vn/storage/team-sm-1.webp',
            description:
                'Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car',
        },
    ];

    return (
        <div className="row">
            {teamData.map((item, index) => (
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6" key={index}>
                    <div className="team__item text-center">
                        <div className="team__thumb">
                            <div className="team__shape">
                                <Image srcset={item.imageShape} alt="NextGen" />
                            </div>
                            <Image srcset={item.imageSrc} alt="NextGen" />
                        </div>
                        <div className="team__content">
                            <h3 className="team__title">
                                <a
                                    href={`https://nextgenes.edu.vn/doi-ngu/${item.name
                                        .toLowerCase()
                                        .replace(' ', '-')}`}
                                >
                                    {item.name}
                                </a>
                            </h3>
                            <span className="team__designation">{item.designation}</span>
                            <p className="mk-truncate-3">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamEducation;
