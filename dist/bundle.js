!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.myffmpeg=r():e.myffmpeg=r()}(self,(()=>(()=>{"use strict";var e={m:{},u:e=>e+".bundle.js"};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var t=e.g.document;if(!r&&t&&(t.currentScript&&(r=t.currentScript.src),!r)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!r||!/^http(s?):/.test(r));)r=o[n--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.b=document.baseURI||self.location.href;var r,t,o={};return e.r(o),new Error("failed to get response body reader"),new Error("failed to complete download"),(t=r||(r={})).LOAD="LOAD",t.EXEC="EXEC",t.WRITE_FILE="WRITE_FILE",t.READ_FILE="READ_FILE",t.DELETE_FILE="DELETE_FILE",t.RENAME="RENAME",t.CREATE_DIR="CREATE_DIR",t.LIST_DIR="LIST_DIR",t.DELETE_DIR="DELETE_DIR",t.ERROR="ERROR",t.DOWNLOAD="DOWNLOAD",t.PROGRESS="PROGRESS",t.LOG="LOG",t.MOUNT="MOUNT",t.UNMOUNT="UNMOUNT",new Error("unknown message type"),new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),new Error("called FFmpeg.terminate()"),new Error("failed to import ffmpeg-core.js"),o})()));