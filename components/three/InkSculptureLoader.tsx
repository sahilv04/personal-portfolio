"use client";

import dynamic from "next/dynamic";

/** Client-only loader so three.js never blocks first paint. */
const InkSculpture = dynamic(() => import("./InkSculpture"), { ssr: false });

export default InkSculpture;
