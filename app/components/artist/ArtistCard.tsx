"use client"
import { Artist } from "@/app/types"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useEffect, useState } from "react"

interface IArtistCardProps {
  artistDetails: Artist
}

//TODO: refactor to make it one component that renders the items based on the object property

export const ArtistCard: FC<IArtistCardProps> = ({ artistDetails }) => {
  return (
    <div className="flex flex-col p-4 rounded-md bg-gray-500 text-black dark:text-white min-h-[200px] items-left justify-center gap-1">
      <h2 className="text-xl mb-2">
        {artistDetails?.username?.formula?.string?.split("?")[0] || ""}
      </h2>
      <p className="">
        <span className="text-gray-900 dark:text-gray-400">Art Style:</span>{" "}
        {(artistDetails?.art_style?.multi_select || [])
          .map((style) => style.name)
          .join(", ")}
      </p>
      <p className="">
        <span className="text-gray-900  dark:text-gray-400">Special Tags:</span>{" "}
        {(artistDetails?.special_tags?.multi_select || [])
          .map((tag) => tag.name)
          .join(", ")}
      </p>
      <p className="">
        <span className="text-gray-900  dark:text-gray-400">Followers:</span>{" "}
        {artistDetails?.followers_rounded?.number || 0}
      </p>
      <p className="">
        <span className="text-gray-900  dark:text-gray-400">
          Twitter Profile:
        </span>{" "}
        <a
          href={artistDetails?.twitter_profile?.url || "#"}
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-cyan-300" />
        </a>
      </p>
      <p className="">
        <span className="text-gray-900  dark:text-gray-400">Artist Level:</span>{" "}
        {artistDetails?.artist_level?.select?.name || ""}
      </p>
    </div>
  )
}
