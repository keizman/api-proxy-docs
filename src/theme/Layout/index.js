import React, { useEffect } from 'react';
import OriginalLayout from '@theme-original/Layout';
import { useLocation, useHistory } from '@docusaurus/router';

function Layout(props) {
  const location = useLocation();
  const history = useHistory();
  
  useEffect(() => {
    // Only run on first page load
    if (location.pathname === '/' || location.pathname === '/index.html') {
      const userLang = navigator.language || navigator.userLanguage;
      let targetLang = 'en'; // Default
      
      // Map user language to supported languages
      if (userLang.startsWith('zh')) {
        targetLang = 'zh';
      } else if (userLang.startsWith('ja')) {
        targetLang = 'ja';
      } else if (userLang.startsWith('pt')) {
        targetLang = 'pt-BR';
      } else if (userLang.startsWith('hi')) {
        targetLang = 'hi';
      }
      
      // Redirect only if not already on that language
      if (!location.pathname.startsWith(`/${targetLang}/`) && targetLang !== 'en') {
        history.replace(`/${targetLang}/`);
      }
    }
  }, []);

  return <OriginalLayout {...props} />;
}

export default Layout;