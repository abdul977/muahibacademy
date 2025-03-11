import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { departments } from '../data/courses';
import CourseDetail from './CourseDetail';
import { Course } from '../types';

const CourseDetailPage = () => {
  const params = useParams();
  const courseId = params.id;
  
  // Find the course across all departments
  const course: Course | undefined = departments
    .flatMap(dept => dept.courses ?? [])
    .find(course => course.id === courseId);

  // If no course found, redirect to home
  if (!course) {
    return <Navigate to="/" replace />;
  }

  return <CourseDetail course={course} />;
};

export default CourseDetailPage;
