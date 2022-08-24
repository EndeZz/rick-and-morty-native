import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export const enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
};

export type Character = {
  readonly __typename?: 'Character';
  /** Time at which the character was created in the database. */
  readonly created?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  readonly episode: ReadonlyArray<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  readonly gender?: Maybe<Scalars['String']>;
  /** The id of the character. */
  readonly id?: Maybe<Scalars['ID']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  readonly image?: Maybe<Scalars['String']>;
  /** The character's last known location */
  readonly location?: Maybe<Location>;
  /** The name of the character. */
  readonly name?: Maybe<Scalars['String']>;
  /** The character's origin location */
  readonly origin?: Maybe<Location>;
  /** The species of the character. */
  readonly species?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  readonly status?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  readonly type?: Maybe<Scalars['String']>;
};

export type Characters = {
  readonly __typename?: 'Characters';
  readonly info?: Maybe<Info>;
  readonly results?: Maybe<ReadonlyArray<Maybe<Character>>>;
};

export type Episode = {
  readonly __typename?: 'Episode';
  /** The air date of the episode. */
  readonly air_date?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  readonly characters: ReadonlyArray<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  readonly created?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  readonly episode?: Maybe<Scalars['String']>;
  /** The id of the episode. */
  readonly id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  readonly name?: Maybe<Scalars['String']>;
};

export type Episodes = {
  readonly __typename?: 'Episodes';
  readonly info?: Maybe<Info>;
  readonly results?: Maybe<ReadonlyArray<Maybe<Episode>>>;
};

export type FilterCharacter = {
  readonly gender?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly species?: InputMaybe<Scalars['String']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['String']>;
};

export type FilterEpisode = {
  readonly episode?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type FilterLocation = {
  readonly dimension?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['String']>;
};

export type Info = {
  readonly __typename?: 'Info';
  /** The length of the response. */
  readonly count?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  readonly next?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  readonly pages?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  readonly prev?: Maybe<Scalars['Int']>;
};

export type Location = {
  readonly __typename?: 'Location';
  /** Time at which the location was created in the database. */
  readonly created?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  readonly dimension?: Maybe<Scalars['String']>;
  /** The id of the location. */
  readonly id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  readonly name?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  readonly residents: ReadonlyArray<Maybe<Character>>;
  /** The type of the location. */
  readonly type?: Maybe<Scalars['String']>;
};

export type Locations = {
  readonly __typename?: 'Locations';
  readonly info?: Maybe<Info>;
  readonly results?: Maybe<ReadonlyArray<Maybe<Location>>>;
};

export type Query = {
  readonly __typename?: 'Query';
  /** Get a specific character by ID */
  readonly character?: Maybe<Character>;
  /** Get the list of all characters */
  readonly characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  readonly charactersByIds?: Maybe<ReadonlyArray<Maybe<Character>>>;
  /** Get a specific episode by ID */
  readonly episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  readonly episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  readonly episodesByIds?: Maybe<ReadonlyArray<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  readonly location?: Maybe<Location>;
  /** Get the list of all locations */
  readonly locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  readonly locationsByIds?: Maybe<ReadonlyArray<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCharactersByIdsArgs = {
  ids: ReadonlyArray<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: ReadonlyArray<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryLocationsByIdsArgs = {
  ids: ReadonlyArray<Scalars['ID']>;
};

export type AllCharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
}>;


export type AllCharactersQuery = { readonly __typename?: 'Query', readonly characters?: { readonly __typename?: 'Characters', readonly results?: ReadonlyArray<{ readonly __typename?: 'Character', readonly id?: string | null, readonly name?: string | null, readonly status?: string | null, readonly species?: string | null, readonly image?: string | null } | null> | null } | null };


export const AllCharactersDocument = gql`
    query allCharacters($page: Int) {
  characters(page: $page) {
    results {
      id
      name
      status
      species
      image
    }
  }
}
    `;

/**
 * __useAllCharactersQuery__
 *
 * To run a query within a React component, call `useAllCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useAllCharactersQuery(baseOptions?: Apollo.QueryHookOptions<AllCharactersQuery, AllCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCharactersQuery, AllCharactersQueryVariables>(AllCharactersDocument, options);
      }
export function useAllCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCharactersQuery, AllCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCharactersQuery, AllCharactersQueryVariables>(AllCharactersDocument, options);
        }
export type AllCharactersQueryHookResult = ReturnType<typeof useAllCharactersQuery>;
export type AllCharactersLazyQueryHookResult = ReturnType<typeof useAllCharactersLazyQuery>;
export type AllCharactersQueryResult = Apollo.QueryResult<AllCharactersQuery, AllCharactersQueryVariables>;