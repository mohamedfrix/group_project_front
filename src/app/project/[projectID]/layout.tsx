"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

interface ProjectLayoutProps {
  children: ReactNode;
}

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  const params = useParams();
  const pathname = usePathname();
  const projectId = params.projectId as string;

  const navigationItems = [
    {
      name: "Dashboard",
      href: `/project/${projectId}/dashboard`,
      exact: true,
    },
    {
      name: "Team",
      href: `/project/${projectId}/team`,
      exact: false,
    },
    {
      name: "Add Member",
      href: `/project/${projectId}/addMember`,
      exact: false,
    },
    {
      name: "Search Member",
      href: `/project/${projectId}/searchMember`,
      exact: false,
    },
  ];

  const isActive = (href: string, exact: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Project Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Project Name goes here
              </h1>
              <p className="text-sm text-gray-500">
                Manage your project settings and team
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navigationItems.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    py-4 px-1 border-b-2 font-medium text-sm transition-colors
                    ${
                      active
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default ProjectLayout;
