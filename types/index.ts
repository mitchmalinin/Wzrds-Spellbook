export type MultiSelectOption = {
  id: string
  name: string
  color: string
}

type MultiSelect = {
  id: string
  type: "multi_select"
  multi_select: MultiSelectOption[]
}

type Formula = {
  id: string
  type: "formula"
  formula: {
    type: string
    string: string
  }
}

type NumberType = {
  id: string
  type: "number"
  number: number
}

type UrlType = {
  id: string
  type: "url"
  url: string
}

type SelectOption = {
  id: string
  name: string
  color: string
}

type SelectType = {
  id: string
  type: "select"
  select: SelectOption
}

type TextContent = {
  content: string
  link: null | string
}

type Annotations = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

type TitleType = {
  id: string
  type: "title"
  title: {
    type: string
    text: TextContent
    annotations: Annotations
    plain_text: string
    href: null | string
  }[]
}

type CreatedTimeType = {
  id: string
  type: "created_time"
  created_time: string
}

export type Artist = {
  username: Formula
  art_style: MultiSelect
  special_tags: MultiSelect
  followers_rounded: NumberType
  twitter_profile: UrlType
  artist_level: SelectType
  notes: TitleType
  time_added: CreatedTimeType
  publish: { checkbox: boolean }
  id: string
}

export type ArtistStyles = {
  multi_select: { options: MultiSelectOption[] }
}

export type FetchedArtist = {
  username: string | undefined
  followers: string | undefined
}
