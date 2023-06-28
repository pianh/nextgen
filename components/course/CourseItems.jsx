import Image from 'next/image';
import React from 'react';

const CourseItems = () => {
    const courses = [
        {
            id: 1,
            imageUrl: 'https://api.nextgenes.edu.vn/storage/course-2.webp',
            courseUrl: 'https://nextgenes.edu.vn/khoa-hoc/university-seminar-series-global-2-19.html',
            tag: 'Marketing',
            title: 'University seminar series global 2.',
            tutor: 'Brian Cumin',
            studentCount: 0,
            language: 'Tiếng Anh',
        },
        // Add more course objects here
        {
            id: 2,
            imageUrl: 'https://api.nextgenes.edu.vn/storage/course-2.webp',
            courseUrl: 'https://nextgenes.edu.vn/khoa-hoc/university-seminar-series-global-2-19.html',
            tag: 'Marketing',
            title: 'University seminar series global 2.',
            tutor: 'Brian Cumin',
            studentCount: 0,
            language: 'Tiếng Anh',
        },
    ];

    return (
        <>
            {courses.map((course) => (
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={course.id}>
                    <div className="course__item transition-3 white-bg">
                        <div className="course__thumb course_thumb_height fix">
                            <a href={course.courseUrl}>
                                <Image srcset={course.imageUrl} alt="NextGen" className="" />
                            </a>
                        </div>
                        <div className="course__content">
                            <div className="course__top">
                                <div className="course__tag">
                                    <a href="/khoa-hoc/marketing">{course.tag}</a>
                                </div>
                            </div>
                            <h3 className="course__title mk-truncate-1">
                                <a href={course.courseUrl}>{course.title}</a>
                            </h3>
                            <div className="bottom d-flex align-items-center justify-content-between">
                                <div className="course__action">
                                    <ul>
                                        <li>
                                            <div className="course__action-item">
                                                <div className="course__action-icon mr-5">
                                                    <span>
                                                        <i className="fa-regular fa-user"></i>
                                                    </span>
                                                </div>
                                                <div className="course__action-content">
                                                    <span>{course.tutor}</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course__action-item">
                                                <div className="course__action-icon mr-5">
                                                    <span>
                                                        <i className="fa-regular fa-eye"></i>
                                                    </span>
                                                </div>
                                                <div className="course__action-content">
                                                    <span>{course.studentCount} học sinh</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="course__tutor">{course.language}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CourseItems;
