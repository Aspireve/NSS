import React from "react"

export const LoaderStart = React.lazy(() => import ("./StartScreen"))
export const SlowInternet = React.lazy(() => import ("./SlowInternet.jsx"))