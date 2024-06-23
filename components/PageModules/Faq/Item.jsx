"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Text from "@/components/Text"

import { IoIosArrowDown } from "react-icons/io"

export default function Item({ ...props }) {
    const [isOpened, setIsOpened] = useState(false)

    if (!props) return null

    const { question, answer } = props

    const handleClick = (e) => {
        e.preventDefault()
        setIsOpened(!isOpened)
    }

    return (
        <details
            className="
                p-4

                transition-all
                hover:bg-gray-100

                cursor-pointer

                lg:p-6

                border-b border-gray-100
                last:border-0
            "
            onClick={handleClick}
            open
        >
            {question && answer && (
                <summary
                    className={`marker:hidden flex flex-col transition-all ${isOpened ? "gap-2" : "gap-0"}`}
                >
                    <div className="flex items-center justify-between">
                        <Text className="text-xl">{question}</Text>
                        <motion.span
                            animate={{
                                rotate: isOpened ? 180 : 0,
                            }}
                            className="text-xl"
                        >
                            <IoIosArrowDown />
                        </motion.span>
                    </div>
                    <AnimatePresence mode="wait">
                        {isOpened
                            ? answer && (
                                  <motion.div
                                      initial={{
                                          height: 0,
                                          opacity: 0,
                                      }}
                                      animate={{
                                          height: "auto",
                                          opacity: 1,
                                      }}
                                      exit={{
                                          height: 0,
                                          opacity: 0,
                                      }}
                                  >
                                      <Text>{answer}</Text>
                                  </motion.div>
                              )
                            : null}
                    </AnimatePresence>
                </summary>
            )}
        </details>
    )
}
