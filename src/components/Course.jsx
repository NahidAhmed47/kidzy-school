import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCourse from './DisplayCourse';

const Course = () => {
    const {course_data} = useLoaderData();
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mt-5 md:mt-14'>
            {
                course_data.map(course => <DisplayCourse key={course.id} course={course}></DisplayCourse>)
            }
        </div>
    );
};

export default Course;