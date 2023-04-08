import React, { useContext } from 'react';
import DisplayCourse from './DisplayCourse';
import { AllDataContext } from '../layouts/Main';

const Course = () => {
    const courseData = useContext(AllDataContext);
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mt-5 md:mt-10'>
            {
                courseData.map(course => <DisplayCourse key={course.id} course={course}></DisplayCourse>)
            }
        </div>
    );
};

export default Course;