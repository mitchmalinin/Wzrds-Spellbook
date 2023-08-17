"use client"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "next-themes"
import { FC } from "react"

interface INavProps {}

export const Nav: FC<INavProps> = (props) => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-gray-50 px-2 sm:px-4 py-2.5 dark:bg-gray-700 w-full">
      <div className="flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl whitespace-nowrap dark:text-white">
            Wzrd's Spell Book De' Artists
          </span>
        </a>

        <div className="flex md:order-2">
          <ul className="flex flex-row p-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <button
                className="block py-2 pl-3 pr-4 rounded md:p-0"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <FontAwesomeIcon icon={faSun} />
                ) : (
                  <FontAwesomeIcon icon={faMoon} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
