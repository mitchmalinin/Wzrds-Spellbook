"use client"
import { Artist } from "@/app/types"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useEffect, useState } from "react"

interface IArtistCardProps {
  artistDetails: Artist
}

export const ArtistCard: FC<IArtistCardProps> = ({ artistDetails }) => {
  return (
    <div className="flex flex-col p-4 rounded-md bg-gray-500 text-black dark:text-white min-h-[200px] items-left justify-center gap-1">
      <h2 className="text-2xl font-bold mb-2">
        {artistDetails.username.formula.string}
      </h2>
      <p className="">
        <span className="text-gray-900 font-bold dark:text-gray-400">
          Art Style:
        </span>{" "}
        {artistDetails.art_style.multi_select
          .map((style) => style.name)
          .join(", ")}
      </p>
      <p className="">
        <span className="text-gray-900 font-bold dark:text-gray-400">
          Special Tags:
        </span>{" "}
        {artistDetails.special_tags.multi_select
          .map((tag) => tag.name)
          .join(", ")}
      </p>
      <p className="">
        <span className="text-gray-900 font-bold dark:text-gray-400">
          Followers:
        </span>{" "}
        {artistDetails.followers_rounded.number}
      </p>
      <p className="">
        <span className="text-gray-900 font-bold dark:text-gray-400">
          Twitter Profile:
        </span>{" "}
        <a
          href={artistDetails.twitter_profile.url}
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faTwitter} color="blue" />
        </a>
      </p>

      <p className="">
        <span className="text-gray-900 font-bold dark:text-gray-400">
          Artist Level:
        </span>{" "}
        {artistDetails.artist_level.select.name}
      </p>
    </div>
  )
}
