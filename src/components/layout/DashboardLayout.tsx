import React from 'react';
import { GlassCard, GlassCardProps } from '@repo/ui';
import { cn } from '@repo/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
}

const navItems: NavItem[] = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'Products', href: '/dashboard/products' },
  { label: 'Orders', href: '/dashboard/orders' },
  { label: 'Analytics', href: '/dashboard/analytics' },
  { label: 'Settings', href: '/dashboard/settings' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 p-4">
          <div className="h-full">
            <GlassCard 
              blur="md"
              opacity="medium"
              className="h-full p-4"
            >
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">PrintVision</h1>
              </div>
              
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors',
                        isActive
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      )}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </GlassCard>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <GlassCard 
            blur="lg"
            opacity="low"
            className="h-full p-6"
          >
            {children}
          </GlassCard>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;