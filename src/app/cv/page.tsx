'use client';

import { useEffect } from 'react';
import PageWrapper from '@/components/PageWrapper';

export default function CVPage() {
  useEffect(() => {
    // Automatically trigger download when the component mounts
    const downloadCV = () => {
      const link = document.createElement('a');
      link.href = '/Jaume_Ivars_Grimalt_CV.pdf';
      link.download = 'Jaume_Ivars_Grimalt_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadCV();
  }, []);

  return (
    <PageWrapper title="CV Download">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="mb-4">
              <svg
                className="mx-auto h-16 w-16 text-blue-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-400">CV Download Started</h2>
            <p className="text-gray-600 mb-4">
              Your download should start automatically. If it doesn&apos;t, click the button below.
            </p>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Jaume_Ivars_Grimalt_CV.pdf';
                link.download = 'Jaume_Ivars_Grimalt_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}