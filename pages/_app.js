import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
//IMPORT Toaster for small notifications pop-up
import { Toaster } from 'react-hot-toast'


import { ChakraProvider } from '@chakra-ui/react'

//IMPORT Layout
import Layout from '../components/Layout'

import "../scss/styles.scss"   

//IMPORT StateContext from context/stateContext
import { StateContext } from "../context/StateContext"

function MyApp({ Component, pageProps }) {

  return (
  <StateContext>
  <ChakraProvider>
  <Layout>
    <Toaster />
    <Loading>
            <Component {...pageProps} />
          </Loading>
  </Layout>
  </ChakraProvider>
  </StateContext>
  )
}


export default MyApp
