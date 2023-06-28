import React from 'react';

const NavTabs = () => {
    const tabs = [
        { id: 'nav-all-tab', label: 'Tất cả' },
        { id: 'nav-trending-tab', label: 'Trending' },
        { id: 'nav-popularity-tab', label: 'Popularity' },
        { id: 'nav-featured-tab', label: 'Featured' },
        { id: 'nav-design-architect-tab', label: 'Design Architect' },
    ];

    return (
        <nav>
            <div className="nav nav-tabs justify-content-center" id="course-tab" role="tablist">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`nav-link${index === 0 ? ' active' : ''}`}
                        id={tab.id}
                        data-bs-toggle="tab"
                        data-bs-target={`#nav-${tab.id}`}
                        type="button"
                        role="tab"
                        aria-controls={`nav-${tab.id}`}
                        aria-selected={index === 0}
                        tabIndex={index === 0 ? '0' : '-1'}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default NavTabs;
