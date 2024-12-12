import {
  
    Sansita as FontSansita,
    Lato as FontLato
 } from "next/font/google";
 
 
 const fontSansita = FontSansita({
    subsets: ["latin"],
    variable: "--font-sansita",
    weight: ["400", "700", "800", "900"],
 });
 const fontLato = FontLato({
    subsets: ["latin"],
    variable: "--font-lato",
    weight: ["400", "700", "900"],
 });
 
 export const sansita = fontSansita.variable;
 export const lato= fontLato.variable;