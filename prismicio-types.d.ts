// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | WhatWeDoSlice
  | CaseStudiesSlice
  | SectionColumnsSlice
  | RecentWorkSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Services → Logo*
 */
export interface ServicesDocumentDataLogoItem {
  /**
   * Logo field in *Services → Logo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.logo[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Content for Services documents
 */
interface ServicesDocumentData {
  /**
   * Headeline field in *Services*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: services.headeline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headeline: prismic.TitleField;

  /**
   * Logo field in *Services*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: services.logo[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  logo: prismic.GroupField<Simplify<ServicesDocumentDataLogoItem>>;
}

/**
 * Services document from Prismic
 *
 * - **API ID**: `services`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServicesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ServicesDocumentData>,
    "services",
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

type SettingsDocumentDataSlicesSlice = never;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * CTA Button Label field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_button_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_button_label: prismic.KeyTextField;

  /**
   * CTA Button Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_button_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_button_link: prismic.LinkField;

  /**
   * Slice Zone field in *Settings*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SettingsDocumentDataSlicesSlice> /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: settings.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: settings.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Item in *Social Icons → Icons*
 */
export interface SocialIconsDocumentDataIconsItem {
  /**
   * Social Icons field in *Social Icons → Icons*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: social_icons.icons[].social_icons
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  social_icons: prismic.SelectField<"x" | "linkedin" | "email">;

  /**
   * Link field in *Social Icons → Icons*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: social_icons.icons[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

type SocialIconsDocumentDataSlicesSlice = never;

/**
 * Content for Social Icons documents
 */
interface SocialIconsDocumentData {
  /**
   * Icons field in *Social Icons*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: social_icons.icons[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  icons: prismic.GroupField<Simplify<SocialIconsDocumentDataIconsItem>>;

  /**
   * Slice Zone field in *Social Icons*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: social_icons.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SocialIconsDocumentDataSlicesSlice>;
}

/**
 * Social Icons document from Prismic
 *
 * - **API ID**: `social_icons`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SocialIconsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SocialIconsDocumentData>,
    "social_icons",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | ServicesDocument
  | SettingsDocument
  | SocialIconsDocument;

/**
 * Item in *CaseStudies → Default → Primary → Images*
 */
export interface CaseStudiesSliceDefaultPrimaryImagesItem {
  /**
   * Image field in *CaseStudies → Default → Primary → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.default.primary.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *CaseStudies → Default → Primary*
 */
export interface CaseStudiesSliceDefaultPrimary {
  /**
   * Headeline field in *CaseStudies → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.default.primary.headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headeline: prismic.RichTextField;

  /**
   * Images field in *CaseStudies → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.default.primary.images[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<
    Simplify<CaseStudiesSliceDefaultPrimaryImagesItem>
  >;

  /**
   * Show Primary Button field in *CaseStudies → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: case_studies.default.primary.show_primary_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  show_primary_button: prismic.BooleanField;

  /**
   * Button Label field in *CaseStudies → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *CaseStudies → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Sub Text field in *CaseStudies → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.default.primary.button_sub_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_sub_text: prismic.KeyTextField;
}

/**
 * Default variation for CaseStudies Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CaseStudiesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CaseStudiesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CaseStudies*
 */
type CaseStudiesSliceVariation = CaseStudiesSliceDefault;

/**
 * CaseStudies Shared Slice
 *
 * - **API ID**: `case_studies`
 * - **Description**: CaseStudies
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CaseStudiesSlice = prismic.SharedSlice<
  "case_studies",
  CaseStudiesSliceVariation
>;

/**
 * Item in *Hero → Default → Primary → Client Images*
 */
export interface HeroSliceDefaultPrimaryClientImagesItem {
  /**
   * Client Image field in *Hero → Default → Primary → Client Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.client_images[].client_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  client_image: prismic.ImageField<never>;
}

/**
 * Item in *Hero → Default → Primary → Stars*
 */
export interface HeroSliceDefaultPrimaryStarsItem {
  /**
   * Star field in *Hero → Default → Primary → Stars*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.stars[].star
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  star: prismic.SelectField<"One" | "Two" | "Three" | "Four" | "Five">;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Headeline field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headeline: prismic.RichTextField;

  /**
   * Sub Headeline field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.sub_headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_headeline: prismic.RichTextField;

  /**
   * Background Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Client Images field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.client_images[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  client_images: prismic.GroupField<
    Simplify<HeroSliceDefaultPrimaryClientImagesItem>
  >;

  /**
   * Stars field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.stars[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  stars: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryStarsItem>>;

  /**
   * Button Label field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Sub Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_sub_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_sub_text: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *RecentWork → Default → Primary → Works*
 */
export interface RecentWorkSliceDefaultPrimaryWorksItem {
  /**
   * Image field in *RecentWork → Default → Primary → Works*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: recent_work.default.primary.works[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *RecentWork → Default → Primary → Works*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: recent_work.default.primary.works[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *RecentWork → Default → Primary*
 */
export interface RecentWorkSliceDefaultPrimary {
  /**
   * Works field in *RecentWork → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: recent_work.default.primary.works[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  works: prismic.GroupField<Simplify<RecentWorkSliceDefaultPrimaryWorksItem>>;

  /**
   * Show Primary Button field in *RecentWork → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: recent_work.default.primary.show_primary_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  show_primary_button: prismic.BooleanField;

  /**
   * Button Label field in *RecentWork → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recent_work.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *RecentWork → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: recent_work.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for RecentWork Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecentWorkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RecentWorkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RecentWork*
 */
type RecentWorkSliceVariation = RecentWorkSliceDefault;

/**
 * RecentWork Shared Slice
 *
 * - **API ID**: `recent_work`
 * - **Description**: RecentWork
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecentWorkSlice = prismic.SharedSlice<
  "recent_work",
  RecentWorkSliceVariation
>;

/**
 * Item in *SectionColumns → Default → Primary → Columns*
 */
export interface SectionColumnsSliceDefaultPrimaryColumnsItem {
  /**
   * Icons field in *SectionColumns → Default → Primary → Columns*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: section_columns.default.primary.columns[].icons
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icons: prismic.SelectField<"1" | "2">;

  /**
   * Column Headeline field in *SectionColumns → Default → Primary → Columns*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_columns.default.primary.columns[].column_headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  column_headeline: prismic.RichTextField;

  /**
   * Column Description field in *SectionColumns → Default → Primary → Columns*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_columns.default.primary.columns[].column_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  column_description: prismic.RichTextField;
}

/**
 * Primary content in *SectionColumns → Default → Primary*
 */
export interface SectionColumnsSliceDefaultPrimary {
  /**
   * Top Padding field in *SectionColumns → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: section_columns.default.primary.top_padding
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  top_padding: prismic.BooleanField;

  /**
   * Headeline field in *SectionColumns → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: section_columns.default.primary.headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headeline: prismic.TitleField;

  /**
   * Sub Headeline field in *SectionColumns → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_columns.default.primary.sub_headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_headeline: prismic.RichTextField;

  /**
   * Columns field in *SectionColumns → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: section_columns.default.primary.columns[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  columns: prismic.GroupField<
    Simplify<SectionColumnsSliceDefaultPrimaryColumnsItem>
  >;

  /**
   * Show Primary Button field in *SectionColumns → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: section_columns.default.primary.show_primary_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  show_primary_button: prismic.BooleanField;

  /**
   * Button Label field in *SectionColumns → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_columns.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *SectionColumns → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: section_columns.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Background Color field in *SectionColumns → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: grey
   * - **API ID Path**: section_columns.default.primary.background_color
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_color: prismic.SelectField<"grey" | "black" | "white", "filled">;

  /**
   * Border Radius field in *SectionColumns → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: top right top left
   * - **API ID Path**: section_columns.default.primary.border_radius
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  border_radius: prismic.SelectField<
    "top right top left" | "bottom right bottom left",
    "filled"
  >;
}

/**
 * Default variation for SectionColumns Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionColumnsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionColumnsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SectionColumns*
 */
type SectionColumnsSliceVariation = SectionColumnsSliceDefault;

/**
 * SectionColumns Shared Slice
 *
 * - **API ID**: `section_columns`
 * - **Description**: SectionColumns
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionColumnsSlice = prismic.SharedSlice<
  "section_columns",
  SectionColumnsSliceVariation
>;

/**
 * Item in *WhatWeDo → Default → Primary → Services*
 */
export interface WhatWeDoSliceDefaultPrimaryServicesItem {
  /**
   * Services field in *WhatWeDo → Default → Primary → Services*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.services[].services
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  services: prismic.ContentRelationshipField<"services">;
}

/**
 * Item in *WhatWeDo → Default → Primary → Features*
 */
export interface WhatWeDoSliceDefaultPrimaryFeaturesItem {
  /**
   * Number field in *WhatWeDo → Default → Primary → Features*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.features[].number
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  number: prismic.RichTextField;

  /**
   * Title field in *WhatWeDo → Default → Primary → Features*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.features[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *WhatWeDo → Default → Primary → Features*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.features[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Item in *WhatWeDo → Default → Primary → Process*
 */
export interface WhatWeDoSliceDefaultPrimaryProcessItem {
  /**
   * Title field in *WhatWeDo → Default → Primary → Process*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.process[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Task Image field in *WhatWeDo → Default → Primary → Process*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.process[].task_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  task_image: prismic.ImageField<never>;
}

/**
 * Primary content in *WhatWeDo → Default → Primary*
 */
export interface WhatWeDoSliceDefaultPrimary {
  /**
   * Headeline field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headeline: prismic.RichTextField;

  /**
   * Sub Headeline field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.sub_headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_headeline: prismic.RichTextField;

  /**
   * Services field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.services[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<
    Simplify<WhatWeDoSliceDefaultPrimaryServicesItem>
  >;

  /**
   * Show Primary Button field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: what_we_do.default.primary.show_primary_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  show_primary_button: prismic.BooleanField;

  /**
   * Button Label field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Section Label field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.section_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_label: prismic.KeyTextField;

  /**
   * How It Works Headeline field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.show_it_works_headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  show_it_works_headeline: prismic.RichTextField;

  /**
   * Features field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.features[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  features: prismic.GroupField<
    Simplify<WhatWeDoSliceDefaultPrimaryFeaturesItem>
  >;

  /**
   * Process Title field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.process_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  process_title: prismic.RichTextField;

  /**
   * Process field in *WhatWeDo → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do.default.primary.process[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  process: prismic.GroupField<Simplify<WhatWeDoSliceDefaultPrimaryProcessItem>>;
}

/**
 * Default variation for WhatWeDo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WhatWeDoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WhatWeDoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WhatWeDo*
 */
type WhatWeDoSliceVariation = WhatWeDoSliceDefault;

/**
 * WhatWeDo Shared Slice
 *
 * - **API ID**: `what_we_do`
 * - **Description**: WhatWeDo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WhatWeDoSlice = prismic.SharedSlice<
  "what_we_do",
  WhatWeDoSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      ServicesDocument,
      ServicesDocumentData,
      ServicesDocumentDataLogoItem,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocumentDataSlicesSlice,
      SocialIconsDocument,
      SocialIconsDocumentData,
      SocialIconsDocumentDataIconsItem,
      SocialIconsDocumentDataSlicesSlice,
      AllDocumentTypes,
      CaseStudiesSlice,
      CaseStudiesSliceDefaultPrimaryImagesItem,
      CaseStudiesSliceDefaultPrimary,
      CaseStudiesSliceVariation,
      CaseStudiesSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimaryClientImagesItem,
      HeroSliceDefaultPrimaryStarsItem,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      RecentWorkSlice,
      RecentWorkSliceDefaultPrimaryWorksItem,
      RecentWorkSliceDefaultPrimary,
      RecentWorkSliceVariation,
      RecentWorkSliceDefault,
      SectionColumnsSlice,
      SectionColumnsSliceDefaultPrimaryColumnsItem,
      SectionColumnsSliceDefaultPrimary,
      SectionColumnsSliceVariation,
      SectionColumnsSliceDefault,
      WhatWeDoSlice,
      WhatWeDoSliceDefaultPrimaryServicesItem,
      WhatWeDoSliceDefaultPrimaryFeaturesItem,
      WhatWeDoSliceDefaultPrimaryProcessItem,
      WhatWeDoSliceDefaultPrimary,
      WhatWeDoSliceVariation,
      WhatWeDoSliceDefault,
    };
  }
}
