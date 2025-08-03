import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white-800 mb-4">Kontakta Oss</h2>
        <p className="text-lg text-blue-600">Vi hjälper gärna till med dina IT-behov</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <a href="mailto:it.weor@gmail.com" className="text-blue-600 hover:underline">it.weor@gmail.com</a>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-800">Telefon</h3>
              <a href="tel:+46704810377" className="text-gray-700 hover:text-blue-600">+46 70 481 03 77</a>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-800">Adress</h3>
              <p className="text-gray-700">Bromma, Stockholm</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-800">Organisationsnummer</h3>
              <p className="text-gray-700">559397-7332</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-600 italic">
            Vi tackar, <br />
            Many thanks, <br />
            Merci beaucoup
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;