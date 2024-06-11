"use client";

import { ThemeProvider } from "next-themes";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import AuthContextProvider from './store/context/AuthContext'
import Loader from './loading'
import { useEffect, useState } from "react";


export function Providers({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)


  useEffect(() => {
    if (!visible) {
      setVisible(true)
    }
  }, [visible])

  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
         {!visible ? <Loader /> :
          children}
        </ThemeProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}
