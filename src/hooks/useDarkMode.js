import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode',false)

  useEffect(() => {
    darkMode ? document.body.classlist.add('dark-mode') : document.body.classList.remove('dark-mode') 

    
  }, [darkMode]);
  return [darkMode, setDarkMode]
}