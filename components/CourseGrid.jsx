import { supabase }  from "@/lib/supabase";
import CourseCard    from "./CourseCard";
import SkeletonCard  from "./SkeletonCard";
import { Suspense }  from "react";

async function CourseList() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return (
      <div className="col-span-full flex items-center justify-center
                      bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
        <p className="text-red-400 text-sm">
          Failed to load courses. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <>
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </>
  );
}

function CourseSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </>
  );
}

export default function CourseGrid() {
  return (
    <section aria-label="Your courses">
      <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
        Active Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <Suspense fallback={<CourseSkeleton />}>
          <CourseList />
        </Suspense>
      </div>
    </section>
  );
}