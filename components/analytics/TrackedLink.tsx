"use client";

import { track } from "@/lib/analytics";

type TrackedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  eventParams?: Record<string, unknown>;
};

/** Anchor that fires a GA4 event on click. Use from server components. */
export default function TrackedLink({ event, eventParams, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event, eventParams);
        onClick?.(e);
      }}
    />
  );
}
