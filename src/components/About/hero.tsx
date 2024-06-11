'use client'
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { textVariant } from "@/app/utils/motion";

const Hero = () => {

  return (

    <Box
      as="section"
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      bgImg={'/images/about/hero.jpg'}
      height={'100vh'}
      alignItems={'center'}
      justifyContent={'center'}
      display={'flex'}
      textAlign={'center'}
      padding={{
        base: '20px', md: '0px'
      }}
      bgSize="cover"
      bgPosition="center"
    >
      <motion.div variants={textVariant()}>
        <Text
          mt="-10px"
          color="white"
          fontSize={{ base: "30px", md: "50px" }}
          fontWeight="bold"
          transition="opacity 0.5s ease-in-out"
          bgGradient="linear(to-r, #E2C5FF, #0099AA)"
          bgClip="text"
          lineHeight={'normal'}
        >
          Changing Today, Influencing Tomorrow.
        </Text>
      </motion.div>
    </Box>

  );
};

export default Hero;
