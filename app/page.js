import Sidebar      from "@/components/Sidebar";
import MobileNav    from "@/components/MobileNav";
import HeroTile     from "@/components/HeroTile";
import ActivityTile from "@/components/ActivityTile";
import CourseGrid   from "@/components/CourseGrid";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <main className="flex-1 p-4 md:p-7 pb-24 md:pb-7 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <HeroTile />
          </div>
          <div className="md:col-span-1">
            <ActivityTile />
          </div>
        </div>

        <CourseGrid />
      </main>

      <MobileNav />
    </div>
  );
}