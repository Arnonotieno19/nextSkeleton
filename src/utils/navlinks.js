import { motion } from "framer-motion";

export const navlinks =
[
    {
        name:'Branding',
        link:'/services/branding',
        variants: {
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          },
    },
    {
        name:'Digital Marketing',
        link:'/services/digital',
        variants: {
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          },
    },
    {
        name:'Events',
        link:'/services/events',
        variants: {
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          },
    },
    {
        name:'Payment Solutions',
        link:'/services/payment',
        variants: {
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          },
    },
]