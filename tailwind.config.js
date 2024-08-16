/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1.8s infinite'
      },
      container: {
        center: true,
        padding: '0.625rem',
        screens: {
          '2xl': '1200px'
        }
      },
      colors: {
        brand: '#32AA3C',
        bestSeller: '#0081b9',
        success: '#408548',
        red: {
          500: '#cf0010'
        }
      },
      backgroundImage: {
        'star-empty':
          'url(\'data:image/svg+xml, %3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" aria-hidden="true" focusable="false" fill="none" %3E%3Cpath fillRule="evenodd" clipRule="evenodd" d="M25.5 9.4H16L13 0l-3 9.4H.5l7.7 5.1-2.9 9.1L13 18l7.7 5.6-2.9-9 7.7-5.2z" fill="%23dedede" /%3E%3C/svg%3E\')',
        star: 'url(\'data:image/svg+xml, %3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" aria-hidden="true" focusable="false" fill="none" %3E%3Cpath fillRule="evenodd" clipRule="evenodd" d="M25.5 9.4H16L13 0l-3 9.4H.5l7.7 5.1-2.9 9.1L13 18l7.7 5.6-2.9-9 7.7-5.2z" fill="%23ff960b" /%3E%3C/svg%3E\')',
        checked:
          'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="%2332AA3C" %3E%3Cpath d="M9 22L-1 11.402l2.798-2.859 7.149 7.473L22.091 2 25 4.806z"%3E%3C/path%3E%3C/svg%3E\')',
        plus: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-hidden="true" focusable="false" fill="%236f6f6f" type="plus-sign" responsive="true"%3E%3Cpath d="M15 15V25H10V15H0V10H10V0H15V10H25V15H15Z"%3E%3C/path%3E%3C/svg%3E\')',
        minus:
          'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 5" aria-hidden="true" focusable="false" fill="%236f6f6f" type="minus-sign" responsive="true"%3E%3Cpath d="M25 5H0V0H25V5Z"%3E%3C/path%3E%3C/svg%3E\')',
        arrow:
          'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="Selectstyles__SelectIcon-sc-1436t2c-1 fXPMby"%3E%3Cpath d="M24 24H0V0h24v24z" fill="none" opacity=".87"%3E%3C/path%3E%3Cpath d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"%3E%3C/path%3E%3C/svg%3E\')'
      },
      boxShadow: {
        product: '0px 0px 12px rgb(203, 201, 197)'
      },
      fontFamily: {
        'filsan-soft': 'var(--font-filsan-soft)'
      }
    }
  },
  plugins: []
};
