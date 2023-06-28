import Image from 'next/image';
import React from 'react';

const CategoryItems = () => {
    const categories = [
        { name: 'Art & Design', link: '/khoa-hoc/art-design' },
        { name: 'Management', link: '/khoa-hoc/art-design' },
        { name: 'Business', link: '/khoa-hoc/art-design' },
        { name: 'Art & Design', link: '/khoa-hoc/art-design' },
        { name: 'Art & Design', link: '/khoa-hoc/art-design' },
        { name: 'Art & Design', link: '/khoa-hoc/art-design' },
        { name: 'Art & Design', link: '/khoa-hoc/art-design' },
    ];

    return (
        <>
            {categories.map((category, index) => (
                <div key={index} className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                    <div className="category__item text-center mb-45">
                        <div className="category__icon">
                            <a href={category.link}>
                                <Image
                                    srcset="https://api.nextgenes.edu.vn/storage/art-design-icon.webp"
                                    alt="NextGen"
                                />
                            </a>
                        </div>
                        <div className="category__content">
                            <h4 className="category__title">
                                <a href={category.link} className="category__title">
                                    {category.name}
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CategoryItems;
