(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
// Hook: Count Up
const useCountUp = (to, t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "2ee20314bda117b81ff97513032bd262a12a973e5fb0dbf8bd68bfab097ced45") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2ee20314bda117b81ff97513032bd262a12a973e5fb0dbf8bd68bfab097ced45";
    }
    const duration = t0 === undefined ? 1500 : t0;
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    let t2;
    if ($[1] !== duration || $[2] !== to) {
        t1 = ()=>{
            let start;
            let animationFrame;
            const target = typeof to === "number" ? to : 0;
            const step = (ts)=>{
                if (!start) {
                    start = ts;
                }
                const progress = Math.min((ts - start) / duration, 1);
                const currentValue = Math.floor(progress * target);
                setValue(currentValue);
                if (progress < 1) {
                    animationFrame = requestAnimationFrame(step);
                }
            };
            animationFrame = requestAnimationFrame(step);
            return ()=>{
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            };
        };
        t2 = [
            to,
            duration
        ];
        $[1] = duration;
        $[2] = to;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return value;
};
_s(useCountUp, "QEMGEmq5Rfwf2KLuWFF3dZYTA2c=");
// Hook: Typewriter
const useTypewriter = (texts, t0, t1)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "2ee20314bda117b81ff97513032bd262a12a973e5fb0dbf8bd68bfab097ced45") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2ee20314bda117b81ff97513032bd262a12a973e5fb0dbf8bd68bfab097ced45";
    }
    const speed = t0 === undefined ? 100 : t0;
    const delay = t1 === undefined ? 2000 : t1;
    const [currentText, setCurrentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentTextIndex, setCurrentTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t2;
    let t3;
    if ($[1] !== currentIndex || $[2] !== currentTextIndex || $[3] !== delay || $[4] !== speed || $[5] !== texts) {
        t2 = ()=>{
            if (!texts || texts.length === 0) {
                return;
            }
            if (currentIndex < texts[currentTextIndex].length) {
                const timeout = setTimeout(()=>{
                    setCurrentText((prev)=>prev + texts[currentTextIndex][currentIndex]);
                    setCurrentIndex(_temp);
                }, speed);
                return ()=>clearTimeout(timeout);
            } else {
                const timeout_0 = setTimeout(()=>{
                    setCurrentText("");
                    setCurrentIndex(0);
                    setCurrentTextIndex((prev_1)=>(prev_1 + 1) % texts.length);
                }, delay);
                return ()=>clearTimeout(timeout_0);
            }
        };
        t3 = [
            currentIndex,
            currentTextIndex,
            texts,
            speed,
            delay
        ];
        $[1] = currentIndex;
        $[2] = currentTextIndex;
        $[3] = delay;
        $[4] = speed;
        $[5] = texts;
        $[6] = t2;
        $[7] = t3;
    } else {
        t2 = $[6];
        t3 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    return currentText;
};
_s1(useTypewriter, "RgwkxOomYimh0SxjKmSK6aS6Jfk=");
const Hero = ()=>{
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "2ee20314bda117b81ff97513032bd262a12a973e5fb0dbf8bd68bfab097ced45") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2ee20314bda117b81ff97513032bd262a12a973e5fb0dbf8bd68bfab097ced45";
    }
    const projects = useCountUp(40, 2200);
    const roi = useCountUp(12, 2200);
    const retention = useCountUp(98, 2200);
    const years = useCountUp(4, 2200);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "Build. Market. Grow.",
            "Create. Engage. Convert.",
            "Design. Develop. Deliver.",
            "Innovate. Optimize. Scale."
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const typingTexts = t0;
    const typedText = useTypewriter(typingTexts, 40, 2000);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#f7e839]/50 rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-pulse-slow"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 127,
                columnNumber: 80
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 127,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-[8%] top-[25%] animate-float-slow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 24 24",
                fill: "none",
                className: "drop-shadow-[0_0_15px_rgba(247,232,57,0.5)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 10v4a2 2 0 002 2h1l2 3 2-3h2l6-3V7l-6-3H9L6 3 5 6H5a2 2 0 00-2 2z",
                    stroke: "#f7e839",
                    strokeWidth: "1.5",
                    fill: "rgba(247,232,57,0.1)"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 134,
                    columnNumber: 191
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 134,
                columnNumber: 75
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 134,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            animationDelay: "1s"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-[12%] top-[30%] animate-float",
            style: t3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "40",
                height: "40",
                viewBox: "0 0 24 24",
                fill: "none",
                className: "drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 4L2 8l4 4M18 4l4 4-4 4",
                    stroke: "#22d3ee",
                    strokeWidth: "1.8",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 150,
                    columnNumber: 199
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 150,
                columnNumber: 83
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 150,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            animationDelay: "2s"
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-[15%] bottom-[25%] animate-float",
            style: t5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 24 24",
                fill: "none",
                className: "drop-shadow-[0_0_15px_rgba(247,232,57,0.5)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 12l7-7 2 2-7 7-2 5-2-2 5-2z",
                    stroke: "#f7e839",
                    strokeWidth: "1.5",
                    fill: "rgba(247,232,57,0.1)"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 166,
                    columnNumber: 201
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 166,
                columnNumber: 85
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 166,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            animationDelay: "3s"
        };
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 hidden lg:block opacity-60",
            children: [
                t2,
                t4,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-[8%] bottom-[30%] animate-float-slow",
                    style: t7,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "50",
                        height: "50",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        className: "drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 18V6m6 12V9m6 9V4",
                            stroke: "#22d3ee",
                            strokeWidth: "1.8",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 182,
                            columnNumber: 299
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 182,
                        columnNumber: 183
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 182,
                    columnNumber: 103
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 182,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 189,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block w-1 h-6 md:h-10 bg-[#f7e839] ml-2 animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== typedText) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl font-bold text-white leading-tight mb-4 drop-shadow-2xl",
            children: [
                "Strategic Digital",
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[#f7e839] relative min-h-[1.2em] inline-block text-3xl mt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center",
                        children: [
                            typedText,
                            t10
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 203,
                        columnNumber: 196
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 203,
                    columnNumber: 113
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 203,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = typedText;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[280px] md:w-[400px] opacity-80",
            viewBox: "0 0 500 20",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.3,15.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2",
                fill: "none",
                stroke: "#22d3ee",
                strokeWidth: "3",
                strokeLinecap: "round",
                className: "animate-dash filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 211,
                columnNumber: 165
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 211,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative inline-block mt-8",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 218,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t11;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in delay-300",
            children: "Building AI-Enabled Performance Marketing Systems for Indian SMEs"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 226,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-90 text-[#d1d5db]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                className: "md:w-[72px] md:h-[72px]",
                viewBox: "0 0 48 48",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "24",
                        cy: "24",
                        r: "16",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 233,
                        columnNumber: 228
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24 14v10l6 4",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 233,
                        columnNumber: 299
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 233,
                columnNumber: 132
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 233,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== years) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-110",
            children: [
                years,
                "+"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 240,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = years;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white/70 font-medium whitespace-nowrap",
            children: "Years Experience"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 248,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    let t18;
    if ($[22] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative bg-[#111118]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#f7e839]/40 hover:bg-[#111118]/60 hover:shadow-[0_10px_30px_rgba(247,232,57,0.15)] flex flex-col items-center justify-center",
            children: [
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 255,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t16;
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-90 text-[#d1d5db]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                className: "md:w-[72px] md:h-[72px]",
                viewBox: "0 0 48 48",
                fill: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 34h32M10 30h28M12 26h24M16 14h16l4 12H12l4-12z",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 263,
                    columnNumber: 228
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 263,
                columnNumber: 132
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 263,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] !== projects) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-110",
            children: [
                projects,
                "+"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 270,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = projects;
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white/70 font-medium",
            children: "Projects"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 278,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    if ($[28] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative bg-[#111118]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#22d3ee]/40 hover:bg-[#111118]/60 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] flex flex-col items-center justify-center",
            children: [
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 285,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t20;
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-90 text-[#d1d5db]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                className: "md:w-[72px] md:h-[72px]",
                viewBox: "0 0 48 48",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24 42s-14-8.7-14-20a14 14 0 1128 0c0 11.3-14 20-14 20z",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 293,
                        columnNumber: 228
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "24",
                        cy: "20",
                        r: "5",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 293,
                        columnNumber: 346
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 293,
                columnNumber: 132
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 293,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t23;
    } else {
        t23 = $[30];
    }
    let t24;
    if ($[31] !== retention) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-110",
            children: [
                retention,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 300,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = retention;
        $[32] = t24;
    } else {
        t24 = $[32];
    }
    let t25;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white/70 font-medium",
            children: "Client Retention"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 308,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t25;
    } else {
        t25 = $[33];
    }
    let t26;
    if ($[34] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative bg-[#111118]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#f7e839]/40 hover:bg-[#111118]/60 hover:shadow-[0_10px_30px_rgba(247,232,57,0.15)] flex flex-col items-center justify-center",
            children: [
                t23,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 315,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t24;
        $[35] = t26;
    } else {
        t26 = $[35];
    }
    let t27;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2 flex justify-center transition-transform duration-300 ease-out group-hover:scale-90 text-[#d1d5db]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                className: "md:w-[72px] md:h-[72px]",
                viewBox: "0 0 48 48",
                fill: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 36l10-10 6 6 16-16",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 323,
                    columnNumber: 228
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 323,
                columnNumber: 132
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 323,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t27;
    } else {
        t27 = $[36];
    }
    let t28;
    if ($[37] !== roi) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl md:text-4xl font-extrabold text-white mb-2 transition-transform duration-300 ease-out group-hover:scale-110",
            children: [
                roi,
                "x"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 330,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = roi;
        $[38] = t28;
    } else {
        t28 = $[38];
    }
    let t29;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white/70 font-medium",
            children: "Average ROI"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 338,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t29;
    } else {
        t29 = $[39];
    }
    let t30;
    if ($[40] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative bg-[#111118]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#22d3ee]/40 hover:bg-[#111118]/60 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] flex flex-col items-center justify-center",
            children: [
                t27,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 345,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t28;
        $[41] = t30;
    } else {
        t30 = $[41];
    }
    let t31;
    if ($[42] !== t18 || $[43] !== t22 || $[44] !== t26 || $[45] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 animate-fade-in delay-500",
            children: [
                t18,
                t22,
                t26,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 353,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t18;
        $[43] = t22;
        $[44] = t26;
        $[45] = t30;
        $[46] = t31;
    } else {
        t31 = $[46];
    }
    let t32;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine z-10 skew-x-12"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 364,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t32;
    } else {
        t32 = $[47];
    }
    let t33;
    let t34;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/contact",
            className: "group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-black font-bold text-lg shadow-[0_0_20px_rgba(247,232,57,0.3)] hover:shadow-[0_0_30px_rgba(247,232,57,0.5)] transition-all duration-300 hover:-translate-y-1 overflow-hidden",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative z-20 flex items-center justify-center gap-2",
                    children: [
                        "Start Your Project",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 group-hover:translate-x-1 transition-transform",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M13 7l5 5m0 0l-5 5m5-5H6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 372,
                                columnNumber: 538
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 372,
                            columnNumber: 412
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 372,
                    columnNumber: 323
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 372,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/services",
            className: "group w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg hover:border-[#22d3ee]/80 hover:bg-[#22d3ee]/10 hover:text-[#22d3ee] transition-all duration-300 hover:-translate-y-1",
            children: "Explore Services"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 373,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t33;
        $[49] = t34;
    } else {
        t33 = $[48];
        t34 = $[49];
    }
    let t35;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-slide-up delay-700",
            children: [
                t33,
                t34,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://wa.me/9989958238",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group w-full sm:w-auto px-6 py-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 backdrop-blur-sm text-white font-semibold text-lg flex items-center justify-center gap-3 hover:bg-[#25D366]/20 hover:border-[#25D366] transition-all duration-300 hover:-translate-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 32 32",
                            className: "w-6 h-6 transform group-hover:scale-110 transition-transform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "16",
                                        cy: "16",
                                        r: "16",
                                        fill: "#25D366"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 382,
                                        columnNumber: 626
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M24.5 9.5A8.94 8.94 0 0016 6.5c-4.97 0-9 4.03-9 9 0 1.59.42 3.14 1.22 4.51L7 25l5.13-1.34A8.97 8.97 0 0016 25c4.97 0 9-4.03 9-9 0-2.39-.95-4.64-2.5-6.5zm-8.5 13c-1.44 0-2.85-.39-4.07-1.13l-.29-.17-3.04.8.8-2.97-.19-.3A7.01 7.01 0 019 15.5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7zm3.62-5.01c-.21.6-1.23 1.16-1.7 1.23-.44.07-1 .11-1.61-.11-.37-.13-.85-.28-1.46-.57-2.57-1.12-4.25-3.67-4.38-3.86-.13-.19-1.04-1.4-1.04-2.68 0-1.28.66-1.91.9-2.17.24-.26.52-.32.7-.32.18 0 .36.01.51.01.16 0 .38-.06.6.45.22.51.72 1.77.78 1.9.06.13.1.29.02.47-.09.18-.13.28-.25.44-.12.16-.26.34-.38.45-.12.12-.25.24-.1.47.15.23.62.99 1.33 1.61.91.8 1.68 1.05 1.93 1.17.25.12.39.1.53-.06.14-.16.6-.7.76-.94.16-.24.32-.19.53-.11.21.08 1.36.64 1.6.76.24.12.4.18.46.28.06.1.06.56-.15 1.16z",
                                        fill: "#fff"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 382,
                                        columnNumber: 674
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 382,
                                columnNumber: 623
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 382,
                            columnNumber: 490
                        }, ("TURBOPACK compile-time value", void 0)),
                        "WhatsApp"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 382,
                    columnNumber: 131
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 382,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t35;
    } else {
        t35 = $[50];
    }
    let t36;
    if ($[51] !== t13 || $[52] !== t31) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container max-w-7xl mx-auto px-4 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto text-center space-y-10",
                children: [
                    t13,
                    t14,
                    t31,
                    t35
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 389,
                columnNumber: 75
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 389,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t13;
        $[52] = t31;
        $[53] = t36;
    } else {
        t36 = $[53];
    }
    let t37;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        @keyframes fade-in {\n          0% { opacity: 0; transform: translateY(20px); }\n          100% { opacity: 1; transform: translateY(0); }\n        }\n        @keyframes slide-up {\n          0% { opacity: 0; transform: translateY(40px); }\n          100% { opacity: 1; transform: translateY(0); }\n        }\n        @keyframes float {\n          0%, 100% { transform: translateY(0px) rotate(0deg); }\n          50% { transform: translateY(-15px) rotate(3deg); }\n        }\n        @keyframes pulse-slow {\n          0%, 100% { transform: scale(1); opacity: 0.15; }\n          50% { transform: scale(1.1); opacity: 0.25; }\n        }\n        @keyframes dash {\n          to { stroke-dashoffset: -1000; }\n        }\n        @keyframes blink {\n          0%, 100% { opacity: 1; }\n          50% { opacity: 0; }\n        }\n        @keyframes shine {\n          100% { transform: translateX(200%); }\n        }\n        \n        .animate-fade-in { animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }\n        .animate-slide-up { animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }\n        .animate-float { animation: float 6s ease-in-out infinite; }\n        .animate-float-slow { animation: float 9s ease-in-out infinite; }\n        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }\n        .animate-blink { animation: blink 1s step-end infinite; }\n        .animate-shine { animation: shine 1.5s ease-out; }\n        \n        .animate-dash {\n          stroke-dasharray: 1000;\n          stroke-dashoffset: 1000;\n          animation: dash 4s linear infinite;\n        }\n        \n        .delay-300 { animation-delay: 0.3s; }\n        .delay-500 { animation-delay: 0.5s; }\n        .delay-700 { animation-delay: 0.7s; }\n      "
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 398,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t37;
    } else {
        t37 = $[54];
    }
    let t38;
    if ($[55] !== t36) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative overflow-hidden bg-[#0a0f15] min-h-screen flex items-center justify-center pt-24 pb-16",
            children: [
                t1,
                t8,
                t36,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 405,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t36;
        $[56] = t38;
    } else {
        t38 = $[56];
    }
    return t38;
};
_s2(Hero, "6zqB4amm1Nu6qYPou/ARviYVKSo=", false, function() {
    return [
        useCountUp,
        useCountUp,
        useCountUp,
        useCountUp,
        useTypewriter
    ];
});
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
function _temp(prev_0) {
    return prev_0 + 1;
}
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServicesCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const ServicesCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "23d733c651069252956ad3d031fcd11238ad195373865ad4f5cb4ea991ce7e9d") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "23d733c651069252956ad3d031fcd11238ad195373865ad4f5cb4ea991ce7e9d";
    }
    const { title, description, imageUrl, icon } = t0;
    let t1;
    if ($[1] !== imageUrl || $[2] !== title) {
        t1 = imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative hover-zoom",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageUrl,
                    alt: title,
                    className: "w-full aspect-[16/9] object-cover transition group-hover:brightness-105"
                }, void 0, false, {
                    fileName: "[project]/src/components/ServicesCard.jsx",
                    lineNumber: 18,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition"
                }, void 0, false, {
                    fileName: "[project]/src/components/ServicesCard.jsx",
                    lineNumber: 18,
                    columnNumber: 176
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-black/40 border border-white/15 text-white/90",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/ServicesCard.jsx",
                    lineNumber: 18,
                    columnNumber: 316
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServicesCard.jsx",
            lineNumber: 18,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)) : null;
        $[1] = imageUrl;
        $[2] = title;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== icon || $[5] !== imageUrl) {
        t2 = !imageUrl && icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 pb-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 w-12 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-[#f7e839]",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesCard.jsx",
                lineNumber: 27,
                columnNumber: 56
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ServicesCard.jsx",
            lineNumber: 27,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)) : null;
        $[4] = icon;
        $[5] = imageUrl;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold mb-1 text-white",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ServicesCard.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = title;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== description) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/75 text-sm leading-6",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ServicesCard.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = description;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 text-[#f7e839] text-sm font-medium inline-flex items-center gap-2",
            children: [
                "View More... ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "transition -translate-x-0 group-hover:translate-x-1",
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/src/components/ServicesCard.jsx",
                    lineNumber: 52,
                    columnNumber: 111
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServicesCard.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t3 || $[13] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5",
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServicesCard.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t3;
        $[13] = t4;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t1 || $[16] !== t2 || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover-lift hover-accent hover:ring-2 hover:ring-[#f7e839]/30 cursor-pointer",
            children: [
                t1,
                t2,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServicesCard.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t1;
        $[16] = t2;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    return t7;
};
_c = ServicesCard;
const __TURBOPACK__default__export__ = ServicesCard;
var _c;
__turbopack_context__.k.register(_c, "ServicesCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Testimonial.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const Testimonial = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "7b55296f8d647e66bc16b0a9f90771b9255e13f6cbac621067c87a067a2608ab") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7b55296f8d647e66bc16b0a9f90771b9255e13f6cbac621067c87a067a2608ab";
    }
    const { name, role: t1, company: t2, quote, avatarUrl } = t0;
    const role = t1 === undefined ? "" : t1;
    const company = t2 === undefined ? "" : t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "absolute -top-3 -left-1 opacity-20",
            width: "40",
            height: "40",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 7h5v10H5V9a2 2 0 012-2zm10 0h5v10h-7V9a2 2 0 012-2z",
                fill: "#f7e839"
            }, void 0, false, {
                fileName: "[project]/src/components/Testimonial.jsx",
                lineNumber: 21,
                columnNumber: 152
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Testimonial.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    let t4;
    if ($[2] !== quote) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/80 leading-7",
            children: quote
        }, void 0, false, {
            fileName: "[project]/src/components/Testimonial.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = quote;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== avatarUrl || $[5] !== name) {
        t5 = avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: avatarUrl,
            alt: name,
            className: "h-10 w-10 rounded-full object-cover border border-white/10"
        }, void 0, false, {
            fileName: "[project]/src/components/Testimonial.jsx",
            lineNumber: 36,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0)) : null;
        $[4] = avatarUrl;
        $[5] = name;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white font-semibold text-sm",
            children: name
        }, void 0, false, {
            fileName: "[project]/src/components/Testimonial.jsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = name;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== company || $[10] !== role) {
        t7 = role || company ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white/60 text-xs",
            children: [
                role,
                role && company ? " \u2022 " : "",
                company
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Testimonial.jsx",
            lineNumber: 53,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)) : null;
        $[9] = company;
        $[10] = role;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t6 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Testimonial.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t5 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex items-center gap-3",
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Testimonial.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t5;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t4 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full bg-white/5 border border-white/10 rounded-lg p-6 hover-lift hover-accent",
            children: [
                t3,
                t4,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Testimonial.jsx",
            lineNumber: 80,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t4;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    return t10;
};
_c = Testimonial;
const __TURBOPACK__default__export__ = Testimonial;
var _c;
__turbopack_context__.k.register(_c, "Testimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FaqItem.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const FaqItem = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "cf80a317fbe9e717637c6da480b79efd05544dccedbd7ee1d6744835aa6274ae") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cf80a317fbe9e717637c6da480b79efd05544dccedbd7ee1d6744835aa6274ae";
    }
    const { question, answer, delay: t1, defaultOpen: t2, open: controlledOpen, onToggle } = t0;
    const delay = t1 === undefined ? 0 : t1;
    const defaultOpen = t2 === undefined ? false : t2;
    const isControlled = typeof controlledOpen === "boolean";
    const [uncontrolledOpen, setUncontrolledOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    const open = isControlled ? controlledOpen : uncontrolledOpen;
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [maxH, setMaxH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen ? "500px" : "0px");
    let t3;
    if ($[1] !== open) {
        t3 = ()=>{
            const h = contentRef.current ? contentRef.current.scrollHeight : 0;
            setMaxH(open ? `${h + 32}px` : "0px");
        };
        $[1] = open;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== answer || $[4] !== open) {
        t4 = [
            open,
            answer
        ];
        $[3] = answer;
        $[4] = open;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== isControlled || $[7] !== onToggle) {
        t5 = ()=>{
            if (isControlled) {
                onToggle && onToggle();
            } else {
                setUncontrolledOpen(_temp);
            }
        };
        $[6] = isControlled;
        $[7] = onToggle;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const handleClick = t5;
    const t6 = `border-b transition-colors duration-200 ${open ? "border-[#f7e839]/20" : "border-white/[0.08]"}`;
    const t7 = `${delay}ms`;
    let t8;
    if ($[9] !== t7) {
        t8 = {
            animationDelay: t7
        };
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const t9 = `font-semibold text-[15px] leading-snug transition-colors duration-200 ${open ? "text-[#f7e839]" : "text-white/80 group-hover:text-white"}`;
    let t10;
    if ($[11] !== question || $[12] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t9,
            children: question
        }, void 0, false, {
            fileName: "[project]/src/components/FaqItem.jsx",
            lineNumber: 80,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = question;
        $[12] = t9;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    const t11 = `flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? "border-[#f7e839]/40 bg-[#f7e839]/10 text-[#f7e839]" : "border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white/60"}`;
    const t12 = `transition-transform duration-300 ${open ? "rotate-180" : ""}`;
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 9l6 6 6-6",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/FaqItem.jsx",
            lineNumber: 91,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            className: t12,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/FaqItem.jsx",
            lineNumber: 98,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t12;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== t11 || $[18] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t11,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/FaqItem.jsx",
            lineNumber: 106,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t11;
        $[18] = t14;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== handleClick || $[21] !== open || $[22] !== t10 || $[23] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "w-full text-left py-5 flex items-center justify-between gap-6 group",
            onClick: handleClick,
            "aria-expanded": open,
            children: [
                t10,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FaqItem.jsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = handleClick;
        $[21] = open;
        $[22] = t10;
        $[23] = t15;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== maxH) {
        t17 = {
            maxHeight: maxH
        };
        $[25] = maxH;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== answer) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/55 text-sm leading-relaxed pb-6 max-w-2xl",
            children: answer
        }, void 0, false, {
            fileName: "[project]/src/components/FaqItem.jsx",
            lineNumber: 136,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = answer;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== t17 || $[30] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: contentRef,
            style: t17,
            className: "overflow-hidden transition-[max-height] duration-400 ease-in-out",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/FaqItem.jsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t17;
        $[30] = t18;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t16 || $[33] !== t19 || $[34] !== t6 || $[35] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            style: t8,
            children: [
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FaqItem.jsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t16;
        $[33] = t19;
        $[34] = t6;
        $[35] = t8;
        $[36] = t20;
    } else {
        t20 = $[36];
    }
    return t20;
};
_s(FaqItem, "hQa+wIOZsol1KoG3WFEtDWRX5kY=");
_c = FaqItem;
const __TURBOPACK__default__export__ = FaqItem;
function _temp(v) {
    return !v;
}
var _c;
__turbopack_context__.k.register(_c, "FaqItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Reveal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Reveal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "933f409e3d15b9fffcb6cfa3eb52ce52766aeed66c0bb4596b4667fc1cdbe4a0") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "933f409e3d15b9fffcb6cfa3eb52ce52766aeed66c0bb4596b4667fc1cdbe4a0";
    }
    let children;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ children, as: t1, className: t2, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        children = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const as = t1 === undefined ? "div" : t1;
    const className = t2 === undefined ? "" : t2;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            once: true,
            margin: "-50px"
        };
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t3);
    const Component = as;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            opacity: 0,
            y: 50
        };
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== isInView) {
        t5 = isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 50
        };
        $[8] = isInView;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            duration: 0.6,
            ease: "easeOut"
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== children || $[12] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t4,
            animate: t5,
            transition: t6,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Reveal.jsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = children;
        $[12] = t5;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== Component || $[15] !== className || $[16] !== props || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
            ref: ref,
            className: className,
            ...props,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/Reveal.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = Component;
        $[15] = className;
        $[16] = props;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
};
_s(Reveal, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Reveal;
const __TURBOPACK__default__export__ = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Methodology.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const Methodology = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "4025b2c75ff422436e09300dd833bdc37a22aff4520d26cce4ff8c15c2f65ec9") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4025b2c75ff422436e09300dd833bdc37a22aff4520d26cce4ff8c15c2f65ec9";
    }
    let T0;
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        const steps = [
            {
                step: "01",
                time: "Week 1 \u2013 2",
                title: "Discovery &\nDeep Audit",
                desc: "We dig into your business, competitors, audience and current digital gaps \u2014 before spending a single rupee.",
                svg: "M21 21l-4-4M3 11a8 8 0 1116 0 8 8 0 01-16 0z",
                color: "#f7e839",
                colorClass: "text-[#f7e839]",
                bgClass: "bg-[#f7e839]/10",
                borderClass: "border-[#f7e839]/30",
                gradient: "from-[#f7e839]",
                deliverables: [
                    "Full digital presence audit",
                    "Competitor gap analysis",
                    "Target audience mapping",
                    "Goal & KPI alignment",
                    "Budget & channel strategy"
                ]
            },
            {
                step: "02",
                time: "Week 2 \u2013 3",
                title: "Strategy &\nRoadmap",
                desc: "Custom growth roadmap with clear KPIs, timelines and spend plans. You approve everything \u2014 zero surprises.",
                svg: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                color: "#22d3ee",
                colorClass: "text-[#22d3ee]",
                bgClass: "bg-[#22d3ee]/10",
                borderClass: "border-[#22d3ee]/30",
                gradient: "from-[#22d3ee]",
                deliverables: [
                    "30/60/90 day growth plan",
                    "Content & channel calendar",
                    "Ad budget allocation",
                    "Milestone targets",
                    "Zoho project setup"
                ]
            },
            {
                step: "03",
                time: "Week 3 \u2013 6",
                title: "Execution &\nLaunch",
                desc: "AI-accelerated build and launch. Our Zoho workflow means any team member covers seamlessly \u2014 zero delivery gaps.",
                svg: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "#f7e839",
                colorClass: "text-[#f7e839]",
                bgClass: "bg-[#f7e839]/10",
                borderClass: "border-[#f7e839]/30",
                gradient: "from-[#f7e839]",
                deliverables: [
                    "Website / landing page live",
                    "Campaigns activated",
                    "Content publishing begins",
                    "Tracking & pixels live",
                    "Quality assurance checks"
                ]
            },
            {
                step: "04",
                time: "Month 2 onwards",
                title: "Optimise &\nScale",
                desc: "We don't stop at launch. Weekly data review, monthly strategy calls, continuous improvement \u2014 your growth compounds.",
                svg: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                color: "#22d3ee",
                colorClass: "text-[#22d3ee]",
                bgClass: "bg-[#22d3ee]/10",
                borderClass: "border-[#22d3ee]/30",
                gradient: "from-[#22d3ee]",
                deliverables: [
                    "Weekly performance report",
                    "A/B testing & iteration",
                    "Monthly strategy call",
                    "Scaling winning campaigns",
                    "Quarterly growth review"
                ]
            }
        ];
        t3 = "py-20 relative overflow-hidden bg-[#0f141a]";
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        t0 = "div";
        t1 = "container mx-auto px-4 relative z-10 max-w-7xl";
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-20 relative z-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg text-[#f7e839]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 bg-[#22d3ee] rounded-full animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Methodology.jsx",
                            lineNumber: 74,
                            columnNumber: 240
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Our Methodology"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Methodology.jsx",
                    lineNumber: 74,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight",
                    children: [
                        "How We Turn Your Vision",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                            className: "hidden md:block"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Methodology.jsx",
                            lineNumber: 74,
                            columnNumber: 435
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Into ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent",
                            children: "Measurable Growth"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Methodology.jsx",
                            lineNumber: 74,
                            columnNumber: 474
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Methodology.jsx",
                    lineNumber: 74,
                    columnNumber: 334
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light",
                    children: "A structured 4-step system built for transparency, accountability, and results — so you always know exactly where your project stands and what's coming next."
                }, void 0, false, {
                    fileName: "[project]/src/components/Methodology.jsx",
                    lineNumber: 74,
                    columnNumber: 596
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Methodology.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#f7e839]/30 via-[#22d3ee]/50 via-[#f7e839]/30 to-transparent z-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/Methodology.jsx",
                    lineNumber: 75,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:block absolute top-[46px] left-[12.5%] w-[13px] h-[13px] rounded-full shadow-[0_0_12px_rgba(247,232,57,0.8),0_0_24px_rgba(247,232,57,0.4)] z-10 \r\n            animate-[travel_4s_ease-in-out_infinite]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Methodology.jsx",
                    lineNumber: 75,
                    columnNumber: 233
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    dangerouslySetInnerHTML: {
                        __html: "\n            @keyframes travel {\n              0% { left: 12.5%; background: #f7e839; box-shadow: 0 0 12px rgba(247,232,57,0.8); }\n              50% { left: calc(87.5% - 14px); background: #22d3ee; box-shadow: 0 0 12px rgba(34,211,238,0.8); }\n              100% { left: 12.5%; background: #f7e839; box-shadow: 0 0 12px rgba(247,232,57,0.8); }\n            }\n            @keyframes rot { to { transform: rotate(360deg); } }\n            @keyframes rotReverse { to { transform: rotate(-360deg); } }\n          "
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Methodology.jsx",
                    lineNumber: 75,
                    columnNumber: 465
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative",
                    children: steps.map(_temp)
                }, void 0, false, {
                    fileName: "[project]/src/components/Methodology.jsx",
                    lineNumber: 77,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Methodology.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = T0;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
    } else {
        T0 = $[1];
        t0 = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
                as: t0,
                className: t1,
                children: [
                    t2,
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#ffffff05] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4 relative overflow-hidden",
                        children: [
                            {
                                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                title: "Weekly Reporting",
                                sub: "Every metric, every Monday"
                            },
                            {
                                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                title: "Zero Lock-In",
                                sub: "Month-to-month contracts"
                            },
                            {
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                title: "Agile Workflow",
                                sub: "Full timeline transparency"
                            },
                            {
                                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                                title: "AI-Accelerated",
                                sub: "Faster, smarter delivery"
                            }
                        ].map(_temp2)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 94,
                        columnNumber: 69
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Methodology.jsx",
                lineNumber: 94,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Methodology.jsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
};
_c = Methodology;
const __TURBOPACK__default__export__ = Methodology;
function _temp(stage) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative z-10 lg:px-4 flex flex-col h-full items-center lg:items-stretch",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[104px] h-[104px] mx-auto mb-8 relative flex items-center justify-center bg-[#11181f]/80 backdrop-blur-md rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -inset-[6px] rounded-full border border-dashed border-white/20 animate-[rot_12s_linear_infinite]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 119,
                        columnNumber: 350
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -inset-[14px] rounded-full border border-dashed border-white/10 animate-[rotReverse_20s_linear_infinite]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 119,
                        columnNumber: 475
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black z-20",
                        style: {
                            backgroundColor: stage.color,
                            boxShadow: `0 0 16px ${stage.color}80`
                        },
                        children: stage.step
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 119,
                        columnNumber: 608
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-10 h-10 text-white/80 group-hover:text-white transition-colors duration-300 relative z-10",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: stage.svg
                        }, void 0, false, {
                            fileName: "[project]/src/components/Methodology.jsx",
                            lineNumber: 122,
                            columnNumber: 191
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 122,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Methodology.jsx",
                lineNumber: 119,
                columnNumber: 123
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-[#ffffff08] backdrop-blur-md border border-white/10 rounded-3xl p-7 hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col flex-1 overflow-hidden w-full text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${stage.gradient} to-transparent`
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 122,
                        columnNumber: 571
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute pointer-events-none -inset-2 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${stage.gradient} to-transparent rounded-2xl blur-xl`
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 122,
                        columnNumber: 746
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-mono tracking-wider uppercase mb-5 border ${stage.colorClass} ${stage.bgClass} ${stage.borderClass}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3.5 h-3.5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Methodology.jsx",
                                    lineNumber: 122,
                                    columnNumber: 1227
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Methodology.jsx",
                                lineNumber: 122,
                                columnNumber: 1144
                            }, this),
                            stage.time
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 122,
                        columnNumber: 941
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl md:text-2xl font-bold text-white mb-3 whitespace-pre-line leading-tight tracking-tight",
                        children: stage.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 122,
                        columnNumber: 1368
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/70 text-sm leading-relaxed mb-6 font-light",
                        children: stage.desc
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 122,
                        columnNumber: 1497
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-auto pt-5 border-t border-white/5 space-y-3",
                        children: stage.deliverables.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3 text-[13.5px] text-white/60 leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1",
                                        style: {
                                            backgroundColor: stage.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Methodology.jsx",
                                        lineNumber: 122,
                                        columnNumber: 1771
                                    }, this),
                                    item
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/Methodology.jsx",
                                lineNumber: 122,
                                columnNumber: 1682
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 122,
                        columnNumber: 1582
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Methodology.jsx",
                lineNumber: 122,
                columnNumber: 288
            }, this)
        ]
    }, stage.step, true, {
        fileName: "[project]/src/components/Methodology.jsx",
        lineNumber: 119,
        columnNumber: 10
    }, this);
}
function _temp2(trust, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 relative z-10 w-full md:w-auto hover:-translate-y-1 transition-transform duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-2xl bg-[#ffffff08] border border-white/10 flex items-center justify-center flex-shrink-0 text-white/80 group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6 group-hover:text-[#f7e839] transition-colors duration-300",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.5",
                                d: trust.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/Methodology.jsx",
                                lineNumber: 127,
                                columnNumber: 444
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Methodology.jsx",
                            lineNumber: 127,
                            columnNumber: 307
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 127,
                        columnNumber: 163
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "block text-white text-[15px] font-semibold tracking-wide",
                                children: trust.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Methodology.jsx",
                                lineNumber: 127,
                                columnNumber: 547
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/50 text-sm font-light mt-0.5 block",
                                children: trust.sub
                            }, void 0, false, {
                                fileName: "[project]/src/components/Methodology.jsx",
                                lineNumber: 127,
                                columnNumber: 646
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Methodology.jsx",
                        lineNumber: 127,
                        columnNumber: 542
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Methodology.jsx",
                lineNumber: 127,
                columnNumber: 36
            }, this),
            i_0 < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block w-px h-12 bg-white/5 relative z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/Methodology.jsx",
                lineNumber: 127,
                columnNumber: 752
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/src/components/Methodology.jsx",
        lineNumber: 127,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Methodology");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Home.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServicesCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Testimonial.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FaqItem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FaqItem.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Methodology$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Methodology.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const Home = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "8271c714964deeb40f08815837b4e06ac2f2116c79af6652c27f3784e7cb0e66") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8271c714964deeb40f08815837b4e06ac2f2116c79af6652c27f3784e7cb0e66";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 20,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg",
            children: "Who We Are"
        }, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-15 relative bg-[#0f141a]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                as: "div",
                className: "container mx-auto px-4 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-white mb-6 leading-tight",
                            children: [
                                "Strategic Digital ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent",
                                    children: "Growth Partners"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Home.jsx",
                                    lineNumber: 34,
                                    columnNumber: 246
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Home.jsx",
                            lineNumber: 34,
                            columnNumber: 163
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-white/70 mb-4 font-light",
                            children: "Zero to viral, we make it happen."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Home.jsx",
                            lineNumber: 34,
                            columnNumber: 366
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-white/70 max-w-4xl mx-auto leading-relaxed mb-8",
                            children: "At 4KMEDIA, we blend creativity and strategy to help brands shine in a noisy world. We're young, bold, and obsessed with results that matter..We specialize in performance-driven digital solutions that deliver measurable results and sustainable growth for forward-thinking brands."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Home.jsx",
                            lineNumber: 34,
                            columnNumber: 456
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/about",
                            className: "px-8 py-4 rounded-xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-medium text-center",
                            children: "Know More About Us"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Home.jsx",
                            lineNumber: 34,
                            columnNumber: 815
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Home.jsx",
                    lineNumber: 34,
                    columnNumber: 125
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/Home.jsx",
                lineNumber: 34,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg",
            children: "Our Expertise"
        }, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl font-bold text-white mb-6",
                    children: [
                        "Comprehensive ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent",
                            children: "Digital Solutions"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Home.jsx",
                            lineNumber: 48,
                            columnNumber: 113
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Home.jsx",
                    lineNumber: 48,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-white/70 max-w-3xl mx-auto leading-relaxed",
                    children: "End-to-end services designed to elevate your digital presence and drive measurable business growth"
                }, void 0, false, {
                    fileName: "[project]/src/pages/Home.jsx",
                    lineNumber: 48,
                    columnNumber: 235
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",
            children: [
                {
                    title: "Social Media Marketing",
                    description: "Content strategy, community management, and paid amplification across social platforms.",
                    icon: "M20 12a8 8 0 11-8-8 M22 2l-8.5 8.5"
                },
                {
                    title: "Website Development",
                    description: "Fast, accessible, SEO-friendly websites with modern stacks and CMS options.",
                    icon: "M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
                },
                {
                    title: "UI/UX Design",
                    description: "Human-centered product design\u2014research, prototypes, and design systems that convert.",
                    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                {
                    title: "Video Production",
                    description: "Brand films, reels, and ad creatives from scripting to distribution.",
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                {
                    title: "Logo Design",
                    description: "Distinctive brand identities with scalable logo systems and guidelines.",
                    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                },
                {
                    title: "Event Organization",
                    description: "Complete event planning and management for engaging brand experiences.",
                    icon: "M8 7V3h8v4M3 11h18M5 11v10a2 2 0 002 2h10a2 2 0 002-2V11"
                }
            ].map(_temp2)
        }, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10",
            children: "Explore All Services"
        }, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-15 relative bg-[#06060a]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                as: "div",
                className: "container mx-auto px-4 relative z-10",
                children: [
                    t4,
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/services",
                            className: "group inline-flex items-center px-8 py-4 rounded-xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-medium relative overflow-hidden",
                            children: [
                                t6,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "ml-3 w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/Home.jsx",
                                        lineNumber: 94,
                                        columnNumber: 562
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Home.jsx",
                                    lineNumber: 94,
                                    columnNumber: 394
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-[#f7e839]/0 to-[#f7e839]/5 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Home.jsx",
                                    lineNumber: 94,
                                    columnNumber: 654
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Home.jsx",
                            lineNumber: 94,
                            columnNumber: 162
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Home.jsx",
                        lineNumber: 94,
                        columnNumber: 133
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/Home.jsx",
                lineNumber: 94,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Methodology$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 95,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-bold text-center text-white mb-6",
            children: [
                "Our ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent",
                    children: "Brand Partners"
                }, void 0, false, {
                    fileName: "[project]/src/pages/Home.jsx",
                    lineNumber: 105,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 105,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-6 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed",
            children: "We collaborate with top brands to deliver innovative solutions and measurable growth."
        }, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 106,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#06060a] relative py-15 mt-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    t9,
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-marquee flex gap-10 items-center",
                                style: {
                                    width: "max-content",
                                    minWidth: "100%",
                                    willChange: "transform"
                                },
                                children: [
                                    {
                                        src: "/assets/brandLogos/ManiorawhiteLogo.webp",
                                        alt: "Brand 1"
                                    },
                                    {
                                        src: "/assets/brandLogos/hustleLogo.avif",
                                        alt: "Brand 2"
                                    },
                                    {
                                        src: "/assets/brandLogos/zeck.png",
                                        alt: "Brand 3"
                                    },
                                    {
                                        src: "/assets/brandLogos/auxo.avif",
                                        alt: "Brand 4"
                                    }
                                ].concat([
                                    {
                                        src: "/assets/brandLogos/ManiorawhiteLogo.webp",
                                        alt: "Brand 1"
                                    },
                                    {
                                        src: "/assets/brandLogos/hustleLogo.avif",
                                        alt: "Brand 2"
                                    },
                                    {
                                        src: "/assets/brandLogos/zeck.png",
                                        alt: "Brand 3"
                                    },
                                    {
                                        src: "/assets/brandLogos/auxo.avif",
                                        alt: "Brand 4"
                                    }
                                ]).map(_temp3)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Home.jsx",
                                lineNumber: 115,
                                columnNumber: 174
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                children: "\n              .brand-marquee {\n                display: flex;\n                flex-wrap: nowrap;\n                animation: brand-marquee-scroll 20s linear infinite;\n              }\n              @keyframes brand-marquee-scroll {\n                0% {\n                  transform: translateX(0);\n                }\n                100% {\n                  transform: translateX(-50%);\n                }\n              }\n              .brand-marquee img:last-child {\n                margin-right: 0 !important;\n              }\n            "
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Home.jsx",
                                lineNumber: 143,
                                columnNumber: 35
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Home.jsx",
                        lineNumber: 115,
                        columnNumber: 125
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/Home.jsx",
                lineNumber: 115,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-4xl font-bold text-white mb-6 leading-tight",
            children: [
                "Ready to ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent",
                    children: "Accelerate"
                }, void 0, false, {
                    fileName: "[project]/src/pages/Home.jsx",
                    lineNumber: 151,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0)),
                " Your Growth?"
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 151,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed",
            children: "Schedule a complimentary strategy session with our experts. We'll analyze your current performance and outline a customized roadmap for success."
        }, void 0, false, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 152,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "overflow-hidden",
            children: [
                t0,
                t2,
                t7,
                t8,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-15 relative bg-[#0f141a]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        as: "div",
                        className: "container mx-auto px-4 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden",
                            children: [
                                t12,
                                t13,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact",
                                            className: "px-10 py-5 rounded-2xl bg-gradient-to-r from-[#f7e839] to-[#f7e839]/90 text-black transition-all duration-300 font-semibold text-lg min-w-[200px] hover:shadow-2xl hover:shadow-[#f7e839]/30 transform hover:scale-105",
                                            children: "Schedule Strategy Call"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Home.jsx",
                                            lineNumber: 161,
                                            columnNumber: 407
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services",
                                            className: "px-10 py-5 rounded-2xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-semibold text-lg min-w-[200px]",
                                            children: "View Our Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Home.jsx",
                                            lineNumber: 161,
                                            columnNumber: 679
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Home.jsx",
                                    lineNumber: 161,
                                    columnNumber: 330
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/50 text-sm mt-6",
                                    children: "No obligation, just actionable insights"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Home.jsx",
                                    lineNumber: 161,
                                    columnNumber: 904
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Home.jsx",
                            lineNumber: 161,
                            columnNumber: 181
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Home.jsx",
                        lineNumber: 161,
                        columnNumber: 115
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/Home.jsx",
                    lineNumber: 161,
                    columnNumber: 66
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/Home.jsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    return t14;
};
_c = Home;
const __TURBOPACK__default__export__ = Home;
function _temp(e) {
    e.preventDefault();
    window.history.pushState({}, "", "/services");
    window.dispatchEvent(new PopStateEvent("popstate"));
}
function _temp2(service, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#f7e839]/10 to-[#22d3ee]/10 rounded-2xl transform group-hover:scale-105 transition-all duration-300 blur-xl opacity-0 group-hover:opacity-100"
            }, void 0, false, {
                fileName: "[project]/src/pages/Home.jsx",
                lineNumber: 175,
                columnNumber: 54
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full group-hover:border-[#f7e839]/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-14 h-14 rounded-xl bg-gradient-to-br from-[#f7e839] to-[#22d3ee] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6 text-black",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: service.icon
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Home.jsx",
                                lineNumber: 175,
                                columnNumber: 731
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Home.jsx",
                            lineNumber: 175,
                            columnNumber: 641
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Home.jsx",
                        lineNumber: 175,
                        columnNumber: 463
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-white mb-4",
                        children: service.title
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Home.jsx",
                        lineNumber: 175,
                        columnNumber: 829
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/70 leading-7",
                        children: service.description
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Home.jsx",
                        lineNumber: 175,
                        columnNumber: 899
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/services",
                            className: "text-[#f7e839] text-sm font-medium flex items-center gap-2 hover:underline transition-colors",
                            onClick: _temp,
                            children: [
                                "Learn more",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/Home.jsx",
                                        lineNumber: 175,
                                        columnNumber: 1281
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Home.jsx",
                                    lineNumber: 175,
                                    columnNumber: 1202
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Home.jsx",
                            lineNumber: 175,
                            columnNumber: 1051
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Home.jsx",
                        lineNumber: 175,
                        columnNumber: 963
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/Home.jsx",
                lineNumber: 175,
                columnNumber: 256
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/pages/Home.jsx",
        lineNumber: 175,
        columnNumber: 10
    }, this);
}
function _temp3(logo, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: logo.src,
        alt: logo.alt,
        className: "h-20 w-auto object-contain opacity-80 transition",
        draggable: "false"
    }, idx, false, {
        fileName: "[project]/src/pages/Home.jsx",
        lineNumber: 178,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2dc24177._.js.map