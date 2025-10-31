
import React from 'react';

export const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="bg-brand-blue-900 p-2 rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    </div>
    <span className="font-poppins font-bold text-xl text-brand-blue-900">JIGUI CARBURANT</span>
  </div>
);

export const DownloadApple = () => (
    <svg className="w-40 h-auto" viewBox="0 0 162 53" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="162" height="53" rx="10" fill="black"/><path d="M125.753 37.3331C125.433 37.3331 123.633 37.2131 122.146 35.8065C120.653 34.3931 119.533 32.1265 119.626 29.8265C119.626 27.2465 120.886 25.1065 122.466 23.6731C123.96 22.2598 125.686 21.6198 127.76 21.6731C127.913 21.6731 129.846 21.7598 131.546 23.3265C131.626 23.4065 131.686 23.4465 131.746 23.5265C131.786 23.5798 131.833 23.6198 131.866 23.6731L131.913 23.7331C133.226 25.1798 133.886 26.9131 133.8 28.7131C133.886 28.7931 133.886 28.8465 133.886 28.9131C133.886 28.9931 133.886 29.0598 133.886 29.1265C133.873 32.1331 132.733 34.3931 131.133 35.8065C129.626 37.1265 127.713 37.3331 125.753 37.3331ZM124.966 18.0465C126.333 17.9198 127.8 18.4931 128.826 19.6931C129.746 18.5998 131.153 17.9331 132.706 17.9198C132.786 17.9198 132.853 17.9198 132.933 17.9198C134.3 17.9931 135.533 18.7398 136.333 19.9265C137.133 21.1131 137.373 22.4665 137.266 23.7798C137.213 23.8265 137.213 23.8731 137.213 23.9198C136.146 21.0331 134.126 19.8598 132.426 19.8598C132.346 19.8598 132.293 19.8731 132.226 19.8865C130.226 20.1731 128.733 21.5798 128.186 23.3665C127.32 21.2131 125.593 19.8198 123.513 19.8065C123.546 19.2931 123.76 18.7931 124.16 18.4265C124.413 18.1998 124.68 18.0931 124.966 18.0465Z" fill="white"/><text fill="white" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="10" font-weight="500" letter-spacing="0em"><tspan x="45.9189" y="24.4814">Download on the</tspan></text><text fill="white" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="45.9189" y="41.4814">App Store</tspan></text></svg>
);
  
export const DownloadGoogle = () => (
    <svg className="w-40 h-auto" viewBox="0 0 162 53" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="162" height="53" rx="10" fill="black"/><path d="M117.821 26.0664L114.261 29.6197L124.561 39.9197L137.134 27.3397C137.521 26.9531 137.521 26.3464 137.134 25.9597L130.694 19.5197L124.601 25.6131L117.821 26.0664Z" fill="#00A04D"/><path d="M117.821 26.0669L113.628 21.8735L117.381 18.1202C118.828 16.6735 120.934 16.6735 122.381 18.1202L124.601 20.3402L117.821 26.0669Z" fill="#F3C300"/><path d="M124.601 25.613L130.694 19.5197L128.328 17.153C126.121 14.9464 122.381 15.2464 119.868 17.7597L117.381 20.2464L124.601 27.4664V25.613Z" fill="#F32E00"/><path d="M137.134 27.34L124.561 39.92L119.868 35.2267L123.014 32.08L114.261 29.62L117.821 26.0667L124.601 25.6133L130.694 19.52L137.134 25.96C137.521 26.3467 137.521 26.9533 137.134 27.34Z" fill-opacity="0.2"/><path d="M117.381 33.1536L124.601 25.9336L119.868 21.2002L117.381 23.6869C114.868 26.2002 114.868 30.2869 117.381 32.8002C117.381 32.9069 117.381 33.0402 117.381 33.1536Z" fill="#0069B3"/><text fill="white" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="10" font-weight="500" letter-spacing="0em"><tspan x="45.9189" y="24.4814">GET IT ON</tspan></text><text fill="white" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="45.9189" y="41.4814">Google Play</tspan></text></svg>
);

export const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ExclamationCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const XCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const GasPumpIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const LocationMarkerIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ClockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
