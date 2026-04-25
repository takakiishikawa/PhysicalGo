import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@takaki/go-design-system";
import type { BreadcrumbEntry } from "@takaki/go-design-system";
import { Fragment } from "react";

interface PageShellProps {
  title: string;
  description?: string;
  /** タイトル左に表示するアイコン（lucide-react を推奨） */
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  breadcrumbs?: BreadcrumbEntry[];
  children: React.ReactNode;
}

export function PageShell({
  title,
  description,
  icon,
  actions,
  breadcrumbs,
  children,
}: PageShellProps) {
  return (
    <div className="px-6 py-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col gap-1">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((crumb, i) => {
                  const isLast = i === breadcrumbs.length - 1;
                  return (
                    <Fragment key={i}>
                      {i > 0 && <BreadcrumbSeparator />}
                      <BreadcrumbItem>
                        {isLast || !crumb.href ? (
                          <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={crumb.href}>
                            {crumb.label}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          )}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1 min-w-0">
              <h1 className="flex items-center gap-2.5 text-2xl font-semibold leading-tight text-foreground">
                {icon && (
                  <span className="text-primary inline-flex shrink-0">
                    {icon}
                  </span>
                )}
                <span className="truncate">{title}</span>
              </h1>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
            {actions && (
              <div className="flex shrink-0 items-center gap-2">{actions}</div>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
