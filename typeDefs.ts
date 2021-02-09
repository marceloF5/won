export const typeDefs = `""""""
directive @cacheControl(maxAge: Int, scope: CacheControlScope) on FIELD_DEFINITION | OBJECT | INTERFACE

"""Direct the client to resolve this field locally, either from the cache or local resolvers."""
directive @client(
  """
  When true, the client will never use the cache for this value. See
  https://www.apollographql.com/docs/react/essentials/local-state/#forcing-resolvers-with-clientalways-true
  """
  always: Boolean
) on FIELD | FRAGMENT_DEFINITION | INLINE_FRAGMENT

"""
Export this locally resolved field as a variable to be used in the remainder of this query. See
https://www.apollographql.com/docs/react/essentials/local-state/#using-client-fields-as-variables
"""
directive @export(
  """The variable name to export this field as."""
  as: String!
) on FIELD

"""
Specify a custom store key for this result. See
https://www.apollographql.com/docs/react/advanced/caching/#the-connection-directive
"""
directive @connection(
  """Specify the store key."""
  key: String!
  """An array of query argument names to include in the generated custom store key."""
  filter: [String!]
) on FIELD

""""""
type Query {
  """"""
  banner(id: ID!): Banner
  """"""
  banners(sort: String, limit: Int, start: Int, where: JSON): [Banner!]!
  """"""
  bannersConnection(sort: String, limit: Int, start: Int, where: JSON): BannerConnection
  """"""
  category(id: ID!): Category
  """"""
  categories(sort: String, limit: Int, start: Int, where: JSON): [Category!]!
  """"""
  categoriesConnection(sort: String, limit: Int, start: Int, where: JSON): CategoryConnection
  """"""
  developer(id: ID!): Developer
  """"""
  developers(sort: String, limit: Int, start: Int, where: JSON): [Developer!]!
  """"""
  developersConnection(sort: String, limit: Int, start: Int, where: JSON): DeveloperConnection
  """"""
  game(id: ID!): Game
  """"""
  games(sort: String, limit: Int, start: Int, where: JSON): [Game!]!
  """"""
  gamesConnection(sort: String, limit: Int, start: Int, where: JSON): GameConnection
  """"""
  home: Home
  """"""
  platform(id: ID!): Platform
  """"""
  platforms(sort: String, limit: Int, start: Int, where: JSON): [Platform!]!
  """"""
  platformsConnection(sort: String, limit: Int, start: Int, where: JSON): PlatformConnection
  """"""
  publisher(id: ID!): Publisher
  """"""
  publishers(sort: String, limit: Int, start: Int, where: JSON): [Publisher!]!
  """"""
  publishersConnection(sort: String, limit: Int, start: Int, where: JSON): PublisherConnection
  """"""
  recommended: Recommended
  """"""
  files(sort: String, limit: Int, start: Int, where: JSON): [UploadFile!]!
  """"""
  filesConnection(sort: String, limit: Int, start: Int, where: JSON): UploadFileConnection
  """"""
  role(id: ID!): UsersPermissionsRole
  """Retrieve all the existing roles. You can't apply filters on this query."""
  roles(sort: String, limit: Int, start: Int, where: JSON): [UsersPermissionsRole!]!
  """"""
  rolesConnection(sort: String, limit: Int, start: Int, where: JSON): UsersPermissionsRoleConnection
  """"""
  user(id: ID!): UsersPermissionsUser
  """"""
  users(sort: String, limit: Int, start: Int, where: JSON): [UsersPermissionsUser!]!
  """"""
  usersConnection(sort: String, limit: Int, start: Int, where: JSON): UsersPermissionsUserConnection
  """"""
  me: UsersPermissionsMe
}

""""""
type Banner {
  """"""
  id: ID!
  """"""
  created_at: DateTime!
  """"""
  updated_at: DateTime!
  """"""
  image: UploadFile
  """"""
  title: String!
  """"""
  subtitle: String!
  """"""
  button: ComponentPageButton
  """"""
  ribbon: ComponentPageRibbon
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
}

"""A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."""
scalar DateTime

""""""
type UploadFile {
  """"""
  id: ID!
  """"""
  created_at: DateTime!
  """"""
  updated_at: DateTime!
  """"""
  name: String!
  """"""
  alternativeText: String
  """"""
  caption: String
  """"""
  width: Int
  """"""
  height: Int
  """"""
  formats: JSON
  """"""
  hash: String!
  """"""
  ext: String
  """"""
  mime: String!
  """"""
  size: Float!
  """"""
  url: String!
  """"""
  previewUrl: String
  """"""
  provider: String!
  """"""
  provider_metadata: JSON
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
  """"""
  related(sort: String, limit: Int, start: Int, where: JSON): [Morph!]!
}

"""The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf)."""
scalar JSON

""""""
type AdminUser {
  """"""
  id: ID!
  """"""
  username: String
}

""""""
union Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Banner | BannerConnection | BannerAggregator | BannerGroupBy | BannerConnectionId | BannerConnectionCreated_at | BannerConnectionUpdated_at | BannerConnectionImage | BannerConnectionTitle | BannerConnectionSubtitle | BannerConnectionButton | BannerConnectionRibbon | BannerConnectionCreated_by | BannerConnectionUpdated_by | createBannerPayload | updateBannerPayload | deleteBannerPayload | Category | CategoryConnection | CategoryAggregator | CategoryGroupBy | CategoryConnectionId | CategoryConnectionCreated_at | CategoryConnectionUpdated_at | CategoryConnectionName | CategoryConnectionSlug | CategoryConnectionCreated_by | CategoryConnectionUpdated_by | createCategoryPayload | updateCategoryPayload | deleteCategoryPayload | Developer | DeveloperConnection | DeveloperAggregator | DeveloperGroupBy | DeveloperConnectionId | DeveloperConnectionCreated_at | DeveloperConnectionUpdated_at | DeveloperConnectionName | DeveloperConnectionSlug | DeveloperConnectionCreated_by | DeveloperConnectionUpdated_by | createDeveloperPayload | updateDeveloperPayload | deleteDeveloperPayload | Game | GameConnection | GameAggregator | GameAggregatorSum | GameAggregatorAvg | GameAggregatorMin | GameAggregatorMax | GameGroupBy | GameConnectionId | GameConnectionCreated_at | GameConnectionUpdated_at | GameConnectionName | GameConnectionSlug | GameConnectionShort_description | GameConnectionDescription | GameConnectionPrice | GameConnectionRelease_date | GameConnectionRating | GameConnectionCover | GameConnectionPublisher | GameConnectionCreated_by | GameConnectionUpdated_by | createGamePayload | updateGamePayload | deleteGamePayload | Home | updateHomePayload | deleteHomePayload | Platform | PlatformConnection | PlatformAggregator | PlatformGroupBy | PlatformConnectionId | PlatformConnectionCreated_at | PlatformConnectionUpdated_at | PlatformConnectionName | PlatformConnectionSlug | PlatformConnectionCreated_by | PlatformConnectionUpdated_by | createPlatformPayload | updatePlatformPayload | deletePlatformPayload | Publisher | PublisherConnection | PublisherAggregator | PublisherGroupBy | PublisherConnectionId | PublisherConnectionCreated_at | PublisherConnectionUpdated_at | PublisherConnectionName | PublisherConnectionSlug | PublisherConnectionCreated_by | PublisherConnectionUpdated_by | createPublisherPayload | updatePublisherPayload | deletePublisherPayload | Recommended | updateRecommendedPayload | deleteRecommendedPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_at | UploadFileConnectionUpdated_at | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_metadata | UploadFileConnectionCreated_by | UploadFileConnectionUpdated_by | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnectionCreated_by | UsersPermissionsRoleConnectionUpdated_by | createRolePayload | updateRolePayload | deleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_at | UsersPermissionsUserConnectionUpdated_at | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionCreated_by | UsersPermissionsUserConnectionUpdated_by | createUserPayload | updateUserPayload | deleteUserPayload | ComponentPageButton | ComponentPageHighlight | ComponentPagePopularGames | ComponentPageRibbon | ComponentPageSection

""""""
type UsersPermissionsMe {
  """"""
  id: ID!
  """"""
  username: String!
  """"""
  email: String!
  """"""
  confirmed: Boolean
  """"""
  blocked: Boolean
  """"""
  role: UsersPermissionsMeRole
}

""""""
type UsersPermissionsMeRole {
  """"""
  id: ID!
  """"""
  name: String!
  """"""
  description: String
  """"""
  type: String
}

""""""
type UsersPermissionsLoginPayload {
  """"""
  jwt: String
  """"""
  user: UsersPermissionsMe!
}

""""""
type UserPermissionsPasswordPayload {
  """"""
  ok: Boolean!
}

""""""
type BannerConnection {
  """"""
  values: [Banner]
  """"""
  groupBy: BannerGroupBy
  """"""
  aggregate: BannerAggregator
}

""""""
type BannerGroupBy {
  """"""
  id: [BannerConnectionId]
  """"""
  created_at: [BannerConnectionCreated_at]
  """"""
  updated_at: [BannerConnectionUpdated_at]
  """"""
  image: [BannerConnectionImage]
  """"""
  title: [BannerConnectionTitle]
  """"""
  subtitle: [BannerConnectionSubtitle]
  """"""
  button: [BannerConnectionButton]
  """"""
  ribbon: [BannerConnectionRibbon]
  """"""
  created_by: [BannerConnectionCreated_by]
  """"""
  updated_by: [BannerConnectionUpdated_by]
}

""""""
type BannerConnectionId {
  """"""
  key: ID
  """"""
  connection: BannerConnection
}

""""""
type BannerConnectionCreated_at {
  """"""
  key: DateTime
  """"""
  connection: BannerConnection
}

""""""
type BannerConnectionUpdated_at {
  """"""
  key: DateTime
  """"""
  connection: BannerConnection
}

""""""
type BannerConnectionImage {
  """"""
  key: ID
  """"""
  connection: BannerConnection
}

""""""
type BannerConnectionTitle {
  """"""
  key: String
  """"""
  connection: BannerConnection
}

""""""
type BannerConnectionSubtitle {
  """"""
  key: String
  """"""
  connection: BannerConnection
}

""""""
type BannerConnectionButton {
  """"""
  key: ID
  """"""
  connection: BannerConnection
}

""""""
type BannerConnectionRibbon {
  """"""
  key: ID
  """"""
  connection: BannerConnection
}

""""""
type BannerConnectionCreated_by {
  """"""
  key: ID
  """"""
  connection: BannerConnection
}

""""""
type BannerConnectionUpdated_by {
  """"""
  key: ID
  """"""
  connection: BannerConnection
}

""""""
type BannerAggregator {
  """"""
  count: Int
  """"""
  totalCount: Int
}

""""""
type createBannerPayload {
  """"""
  banner: Banner
}

""""""
type updateBannerPayload {
  """"""
  banner: Banner
}

""""""
type deleteBannerPayload {
  """"""
  banner: Banner
}

""""""
type Category {
  """"""
  id: ID!
  """"""
  created_at: DateTime!
  """"""
  updated_at: DateTime!
  """"""
  name: String!
  """"""
  slug: String!
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
  """"""
  games(sort: String, limit: Int, start: Int, where: JSON): [Game!]!
}

""""""
type Game {
  """"""
  id: ID!
  """"""
  created_at: DateTime!
  """"""
  updated_at: DateTime!
  """"""
  name: String!
  """"""
  slug: String!
  """"""
  short_description: String!
  """"""
  description: String
  """"""
  price: Float!
  """"""
  release_date: Date
  """"""
  rating: ENUM_GAME_RATING
  """"""
  cover: UploadFile
  """"""
  publisher: Publisher
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
  """"""
  gallery(sort: String, limit: Int, start: Int, where: JSON): [UploadFile!]!
  """"""
  categories(sort: String, limit: Int, start: Int, where: JSON): [Category!]!
  """"""
  developers(sort: String, limit: Int, start: Int, where: JSON): [Developer!]!
  """"""
  platforms(sort: String, limit: Int, start: Int, where: JSON): [Platform!]!
}

"""A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."""
scalar Date

""""""
enum ENUM_GAME_RATING {
  """"""
  FREE
  """"""
  pegi3
  """"""
  pegi7
  """"""
  pegi12
  """"""
  pegi16
  """"""
  pegi18
}

""""""
type Publisher {
  """"""
  id: ID!
  """"""
  created_at: DateTime!
  """"""
  updated_at: DateTime!
  """"""
  name: String!
  """"""
  slug: String
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
  """"""
  games(sort: String, limit: Int, start: Int, where: JSON): [Game!]!
}

""""""
type Developer {
  """"""
  id: ID!
  """"""
  created_at: DateTime!
  """"""
  updated_at: DateTime!
  """"""
  name: String!
  """"""
  slug: String!
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
  """"""
  games(sort: String, limit: Int, start: Int, where: JSON): [Game!]!
}

""""""
type Platform {
  """"""
  id: ID!
  """"""
  created_at: DateTime!
  """"""
  updated_at: DateTime!
  """"""
  name: String!
  """"""
  slug: String!
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
  """"""
  games(sort: String, limit: Int, start: Int, where: JSON): [Game!]!
}

""""""
type CategoryConnection {
  """"""
  values: [Category]
  """"""
  groupBy: CategoryGroupBy
  """"""
  aggregate: CategoryAggregator
}

""""""
type CategoryGroupBy {
  """"""
  id: [CategoryConnectionId]
  """"""
  created_at: [CategoryConnectionCreated_at]
  """"""
  updated_at: [CategoryConnectionUpdated_at]
  """"""
  name: [CategoryConnectionName]
  """"""
  slug: [CategoryConnectionSlug]
  """"""
  created_by: [CategoryConnectionCreated_by]
  """"""
  updated_by: [CategoryConnectionUpdated_by]
}

""""""
type CategoryConnectionId {
  """"""
  key: ID
  """"""
  connection: CategoryConnection
}

""""""
type CategoryConnectionCreated_at {
  """"""
  key: DateTime
  """"""
  connection: CategoryConnection
}

""""""
type CategoryConnectionUpdated_at {
  """"""
  key: DateTime
  """"""
  connection: CategoryConnection
}

""""""
type CategoryConnectionName {
  """"""
  key: String
  """"""
  connection: CategoryConnection
}

""""""
type CategoryConnectionSlug {
  """"""
  key: String
  """"""
  connection: CategoryConnection
}

""""""
type CategoryConnectionCreated_by {
  """"""
  key: ID
  """"""
  connection: CategoryConnection
}

""""""
type CategoryConnectionUpdated_by {
  """"""
  key: ID
  """"""
  connection: CategoryConnection
}

""""""
type CategoryAggregator {
  """"""
  count: Int
  """"""
  totalCount: Int
}

""""""
type createCategoryPayload {
  """"""
  category: Category
}

""""""
type updateCategoryPayload {
  """"""
  category: Category
}

""""""
type deleteCategoryPayload {
  """"""
  category: Category
}

""""""
type DeveloperConnection {
  """"""
  values: [Developer]
  """"""
  groupBy: DeveloperGroupBy
  """"""
  aggregate: DeveloperAggregator
}

""""""
type DeveloperGroupBy {
  """"""
  id: [DeveloperConnectionId]
  """"""
  created_at: [DeveloperConnectionCreated_at]
  """"""
  updated_at: [DeveloperConnectionUpdated_at]
  """"""
  name: [DeveloperConnectionName]
  """"""
  slug: [DeveloperConnectionSlug]
  """"""
  created_by: [DeveloperConnectionCreated_by]
  """"""
  updated_by: [DeveloperConnectionUpdated_by]
}

""""""
type DeveloperConnectionId {
  """"""
  key: ID
  """"""
  connection: DeveloperConnection
}

""""""
type DeveloperConnectionCreated_at {
  """"""
  key: DateTime
  """"""
  connection: DeveloperConnection
}

""""""
type DeveloperConnectionUpdated_at {
  """"""
  key: DateTime
  """"""
  connection: DeveloperConnection
}

""""""
type DeveloperConnectionName {
  """"""
  key: String
  """"""
  connection: DeveloperConnection
}

""""""
type DeveloperConnectionSlug {
  """"""
  key: String
  """"""
  connection: DeveloperConnection
}

""""""
type DeveloperConnectionCreated_by {
  """"""
  key: ID
  """"""
  connection: DeveloperConnection
}

""""""
type DeveloperConnectionUpdated_by {
  """"""
  key: ID
  """"""
  connection: DeveloperConnection
}

""""""
type DeveloperAggregator {
  """"""
  count: Int
  """"""
  totalCount: Int
}

""""""
type createDeveloperPayload {
  """"""
  developer: Developer
}

""""""
type updateDeveloperPayload {
  """"""
  developer: Developer
}

""""""
type deleteDeveloperPayload {
  """"""
  developer: Developer
}

""""""
type GameConnection {
  """"""
  values: [Game]
  """"""
  groupBy: GameGroupBy
  """"""
  aggregate: GameAggregator
}

""""""
type GameGroupBy {
  """"""
  id: [GameConnectionId]
  """"""
  created_at: [GameConnectionCreated_at]
  """"""
  updated_at: [GameConnectionUpdated_at]
  """"""
  name: [GameConnectionName]
  """"""
  slug: [GameConnectionSlug]
  """"""
  short_description: [GameConnectionShort_description]
  """"""
  description: [GameConnectionDescription]
  """"""
  price: [GameConnectionPrice]
  """"""
  release_date: [GameConnectionRelease_date]
  """"""
  rating: [GameConnectionRating]
  """"""
  cover: [GameConnectionCover]
  """"""
  publisher: [GameConnectionPublisher]
  """"""
  created_by: [GameConnectionCreated_by]
  """"""
  updated_by: [GameConnectionUpdated_by]
}

""""""
type GameConnectionId {
  """"""
  key: ID
  """"""
  connection: GameConnection
}

""""""
type GameConnectionCreated_at {
  """"""
  key: DateTime
  """"""
  connection: GameConnection
}

""""""
type GameConnectionUpdated_at {
  """"""
  key: DateTime
  """"""
  connection: GameConnection
}

""""""
type GameConnectionName {
  """"""
  key: String
  """"""
  connection: GameConnection
}

""""""
type GameConnectionSlug {
  """"""
  key: String
  """"""
  connection: GameConnection
}

""""""
type GameConnectionShort_description {
  """"""
  key: String
  """"""
  connection: GameConnection
}

""""""
type GameConnectionDescription {
  """"""
  key: String
  """"""
  connection: GameConnection
}

""""""
type GameConnectionPrice {
  """"""
  key: Float
  """"""
  connection: GameConnection
}

""""""
type GameConnectionRelease_date {
  """"""
  key: ID
  """"""
  connection: GameConnection
}

""""""
type GameConnectionRating {
  """"""
  key: String
  """"""
  connection: GameConnection
}

""""""
type GameConnectionCover {
  """"""
  key: ID
  """"""
  connection: GameConnection
}

""""""
type GameConnectionPublisher {
  """"""
  key: ID
  """"""
  connection: GameConnection
}

""""""
type GameConnectionCreated_by {
  """"""
  key: ID
  """"""
  connection: GameConnection
}

""""""
type GameConnectionUpdated_by {
  """"""
  key: ID
  """"""
  connection: GameConnection
}

""""""
type GameAggregator {
  """"""
  count: Int
  """"""
  totalCount: Int
  """"""
  sum: GameAggregatorSum
  """"""
  avg: GameAggregatorAvg
  """"""
  min: GameAggregatorMin
  """"""
  max: GameAggregatorMax
}

""""""
type GameAggregatorSum {
  """"""
  price: Float
}

""""""
type GameAggregatorAvg {
  """"""
  price: Float
}

""""""
type GameAggregatorMin {
  """"""
  price: Float
}

""""""
type GameAggregatorMax {
  """"""
  price: Float
}

""""""
type createGamePayload {
  """"""
  game: Game
}

""""""
type updateGamePayload {
  """"""
  game: Game
}

""""""
type deleteGamePayload {
  """"""
  game: Game
}

""""""
type Home {
  """"""
  id: ID!
  """"""
  created_at: DateTime!
  """"""
  updated_at: DateTime!
  """"""
  newGames: ComponentPageSection
  """"""
  upcomingGames: ComponentPageSection
  """"""
  freeGames: ComponentPageSection
  """"""
  popularGames: ComponentPagePopularGames
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
}

""""""
type ComponentPageSection {
  """"""
  id: ID!
  """"""
  title: String
  """"""
  highlight: ComponentPageHighlight
}

""""""
type ComponentPageHighlight {
  """"""
  id: ID!
  """"""
  title: String!
  """"""
  subtitle: String!
  """"""
  background: UploadFile
  """"""
  floatImage: UploadFile
  """"""
  buttonLabel: String!
  """"""
  buttonLink: String!
  """"""
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT
}

""""""
enum ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT {
  """"""
  right
  """"""
  left
}

""""""
type ComponentPagePopularGames {
  """"""
  id: ID!
  """"""
  title: String!
  """"""
  highlight: ComponentPageHighlight
  """"""
  games(sort: String, limit: Int, start: Int, where: JSON): [Game!]!
}

""""""
type updateHomePayload {
  """"""
  home: Home
}

""""""
type deleteHomePayload {
  """"""
  home: Home
}

""""""
type PlatformConnection {
  """"""
  values: [Platform]
  """"""
  groupBy: PlatformGroupBy
  """"""
  aggregate: PlatformAggregator
}

""""""
type PlatformGroupBy {
  """"""
  id: [PlatformConnectionId]
  """"""
  created_at: [PlatformConnectionCreated_at]
  """"""
  updated_at: [PlatformConnectionUpdated_at]
  """"""
  name: [PlatformConnectionName]
  """"""
  slug: [PlatformConnectionSlug]
  """"""
  created_by: [PlatformConnectionCreated_by]
  """"""
  updated_by: [PlatformConnectionUpdated_by]
}

""""""
type PlatformConnectionId {
  """"""
  key: ID
  """"""
  connection: PlatformConnection
}

""""""
type PlatformConnectionCreated_at {
  """"""
  key: DateTime
  """"""
  connection: PlatformConnection
}

""""""
type PlatformConnectionUpdated_at {
  """"""
  key: DateTime
  """"""
  connection: PlatformConnection
}

""""""
type PlatformConnectionName {
  """"""
  key: String
  """"""
  connection: PlatformConnection
}

""""""
type PlatformConnectionSlug {
  """"""
  key: String
  """"""
  connection: PlatformConnection
}

""""""
type PlatformConnectionCreated_by {
  """"""
  key: ID
  """"""
  connection: PlatformConnection
}

""""""
type PlatformConnectionUpdated_by {
  """"""
  key: ID
  """"""
  connection: PlatformConnection
}

""""""
type PlatformAggregator {
  """"""
  count: Int
  """"""
  totalCount: Int
}

""""""
type createPlatformPayload {
  """"""
  platform: Platform
}

""""""
type updatePlatformPayload {
  """"""
  platform: Platform
}

""""""
type deletePlatformPayload {
  """"""
  platform: Platform
}

""""""
type PublisherConnection {
  """"""
  values: [Publisher]
  """"""
  groupBy: PublisherGroupBy
  """"""
  aggregate: PublisherAggregator
}

""""""
type PublisherGroupBy {
  """"""
  id: [PublisherConnectionId]
  """"""
  created_at: [PublisherConnectionCreated_at]
  """"""
  updated_at: [PublisherConnectionUpdated_at]
  """"""
  name: [PublisherConnectionName]
  """"""
  slug: [PublisherConnectionSlug]
  """"""
  created_by: [PublisherConnectionCreated_by]
  """"""
  updated_by: [PublisherConnectionUpdated_by]
}

""""""
type PublisherConnectionId {
  """"""
  key: ID
  """"""
  connection: PublisherConnection
}

""""""
type PublisherConnectionCreated_at {
  """"""
  key: DateTime
  """"""
  connection: PublisherConnection
}

""""""
type PublisherConnectionUpdated_at {
  """"""
  key: DateTime
  """"""
  connection: PublisherConnection
}

""""""
type PublisherConnectionName {
  """"""
  key: String
  """"""
  connection: PublisherConnection
}

""""""
type PublisherConnectionSlug {
  """"""
  key: String
  """"""
  connection: PublisherConnection
}

""""""
type PublisherConnectionCreated_by {
  """"""
  key: ID
  """"""
  connection: PublisherConnection
}

""""""
type PublisherConnectionUpdated_by {
  """"""
  key: ID
  """"""
  connection: PublisherConnection
}

""""""
type PublisherAggregator {
  """"""
  count: Int
  """"""
  totalCount: Int
}

""""""
type createPublisherPayload {
  """"""
  publisher: Publisher
}

""""""
type updatePublisherPayload {
  """"""
  publisher: Publisher
}

""""""
type deletePublisherPayload {
  """"""
  publisher: Publisher
}

""""""
type Recommended {
  """"""
  id: ID!
  """"""
  created_at: DateTime!
  """"""
  updated_at: DateTime!
  """"""
  section: ComponentPagePopularGames
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
}

""""""
type updateRecommendedPayload {
  """"""
  recommended: Recommended
}

""""""
type deleteRecommendedPayload {
  """"""
  recommended: Recommended
}

""""""
type UploadFileConnection {
  """"""
  values: [UploadFile]
  """"""
  groupBy: UploadFileGroupBy
  """"""
  aggregate: UploadFileAggregator
}

""""""
type UploadFileGroupBy {
  """"""
  id: [UploadFileConnectionId]
  """"""
  created_at: [UploadFileConnectionCreated_at]
  """"""
  updated_at: [UploadFileConnectionUpdated_at]
  """"""
  name: [UploadFileConnectionName]
  """"""
  alternativeText: [UploadFileConnectionAlternativeText]
  """"""
  caption: [UploadFileConnectionCaption]
  """"""
  width: [UploadFileConnectionWidth]
  """"""
  height: [UploadFileConnectionHeight]
  """"""
  formats: [UploadFileConnectionFormats]
  """"""
  hash: [UploadFileConnectionHash]
  """"""
  ext: [UploadFileConnectionExt]
  """"""
  mime: [UploadFileConnectionMime]
  """"""
  size: [UploadFileConnectionSize]
  """"""
  url: [UploadFileConnectionUrl]
  """"""
  previewUrl: [UploadFileConnectionPreviewUrl]
  """"""
  provider: [UploadFileConnectionProvider]
  """"""
  provider_metadata: [UploadFileConnectionProvider_metadata]
  """"""
  created_by: [UploadFileConnectionCreated_by]
  """"""
  updated_by: [UploadFileConnectionUpdated_by]
}

""""""
type UploadFileConnectionId {
  """"""
  key: ID
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionCreated_at {
  """"""
  key: DateTime
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionUpdated_at {
  """"""
  key: DateTime
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionName {
  """"""
  key: String
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionAlternativeText {
  """"""
  key: String
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionCaption {
  """"""
  key: String
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionWidth {
  """"""
  key: Int
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionHeight {
  """"""
  key: Int
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionFormats {
  """"""
  key: JSON
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionHash {
  """"""
  key: String
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionExt {
  """"""
  key: String
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionMime {
  """"""
  key: String
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionSize {
  """"""
  key: Float
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionUrl {
  """"""
  key: String
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionPreviewUrl {
  """"""
  key: String
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionProvider {
  """"""
  key: String
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionProvider_metadata {
  """"""
  key: JSON
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionCreated_by {
  """"""
  key: ID
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileConnectionUpdated_by {
  """"""
  key: ID
  """"""
  connection: UploadFileConnection
}

""""""
type UploadFileAggregator {
  """"""
  count: Int
  """"""
  totalCount: Int
  """"""
  sum: UploadFileAggregatorSum
  """"""
  avg: UploadFileAggregatorAvg
  """"""
  min: UploadFileAggregatorMin
  """"""
  max: UploadFileAggregatorMax
}

""""""
type UploadFileAggregatorSum {
  """"""
  width: Float
  """"""
  height: Float
  """"""
  size: Float
}

""""""
type UploadFileAggregatorAvg {
  """"""
  width: Float
  """"""
  height: Float
  """"""
  size: Float
}

""""""
type UploadFileAggregatorMin {
  """"""
  width: Float
  """"""
  height: Float
  """"""
  size: Float
}

""""""
type UploadFileAggregatorMax {
  """"""
  width: Float
  """"""
  height: Float
  """"""
  size: Float
}

""""""
type UsersPermissionsPermission {
  """"""
  id: ID!
  """"""
  type: String!
  """"""
  controller: String!
  """"""
  action: String!
  """"""
  enabled: Boolean!
  """"""
  policy: String
  """"""
  role: UsersPermissionsRole
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
}

""""""
type UsersPermissionsRole {
  """"""
  id: ID!
  """"""
  name: String!
  """"""
  description: String
  """"""
  type: String
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
  """"""
  permissions(sort: String, limit: Int, start: Int, where: JSON): [UsersPermissionsPermission!]!
  """"""
  users(sort: String, limit: Int, start: Int, where: JSON): [UsersPermissionsUser!]!
}

""""""
type UsersPermissionsUser {
  """"""
  id: ID!
  """"""
  created_at: DateTime!
  """"""
  updated_at: DateTime!
  """"""
  username: String!
  """"""
  email: String!
  """"""
  provider: String
  """"""
  confirmed: Boolean
  """"""
  blocked: Boolean
  """"""
  role: UsersPermissionsRole
  """"""
  created_by: AdminUser
  """"""
  updated_by: AdminUser
}

""""""
type UsersPermissionsRoleConnection {
  """"""
  values: [UsersPermissionsRole]
  """"""
  groupBy: UsersPermissionsRoleGroupBy
  """"""
  aggregate: UsersPermissionsRoleAggregator
}

""""""
type UsersPermissionsRoleGroupBy {
  """"""
  id: [UsersPermissionsRoleConnectionId]
  """"""
  name: [UsersPermissionsRoleConnectionName]
  """"""
  description: [UsersPermissionsRoleConnectionDescription]
  """"""
  type: [UsersPermissionsRoleConnectionType]
  """"""
  created_by: [UsersPermissionsRoleConnectionCreated_by]
  """"""
  updated_by: [UsersPermissionsRoleConnectionUpdated_by]
}

""""""
type UsersPermissionsRoleConnectionId {
  """"""
  key: ID
  """"""
  connection: UsersPermissionsRoleConnection
}

""""""
type UsersPermissionsRoleConnectionName {
  """"""
  key: String
  """"""
  connection: UsersPermissionsRoleConnection
}

""""""
type UsersPermissionsRoleConnectionDescription {
  """"""
  key: String
  """"""
  connection: UsersPermissionsRoleConnection
}

""""""
type UsersPermissionsRoleConnectionType {
  """"""
  key: String
  """"""
  connection: UsersPermissionsRoleConnection
}

""""""
type UsersPermissionsRoleConnectionCreated_by {
  """"""
  key: ID
  """"""
  connection: UsersPermissionsRoleConnection
}

""""""
type UsersPermissionsRoleConnectionUpdated_by {
  """"""
  key: ID
  """"""
  connection: UsersPermissionsRoleConnection
}

""""""
type UsersPermissionsRoleAggregator {
  """"""
  count: Int
  """"""
  totalCount: Int
}

""""""
type createRolePayload {
  """"""
  role: UsersPermissionsRole
}

""""""
type updateRolePayload {
  """"""
  role: UsersPermissionsRole
}

""""""
type deleteRolePayload {
  """"""
  role: UsersPermissionsRole
}

""""""
type UsersPermissionsUserConnection {
  """"""
  values: [UsersPermissionsUser]
  """"""
  groupBy: UsersPermissionsUserGroupBy
  """"""
  aggregate: UsersPermissionsUserAggregator
}

""""""
type UsersPermissionsUserGroupBy {
  """"""
  id: [UsersPermissionsUserConnectionId]
  """"""
  created_at: [UsersPermissionsUserConnectionCreated_at]
  """"""
  updated_at: [UsersPermissionsUserConnectionUpdated_at]
  """"""
  username: [UsersPermissionsUserConnectionUsername]
  """"""
  email: [UsersPermissionsUserConnectionEmail]
  """"""
  provider: [UsersPermissionsUserConnectionProvider]
  """"""
  confirmed: [UsersPermissionsUserConnectionConfirmed]
  """"""
  blocked: [UsersPermissionsUserConnectionBlocked]
  """"""
  role: [UsersPermissionsUserConnectionRole]
  """"""
  created_by: [UsersPermissionsUserConnectionCreated_by]
  """"""
  updated_by: [UsersPermissionsUserConnectionUpdated_by]
}

""""""
type UsersPermissionsUserConnectionId {
  """"""
  key: ID
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserConnectionCreated_at {
  """"""
  key: DateTime
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserConnectionUpdated_at {
  """"""
  key: DateTime
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserConnectionUsername {
  """"""
  key: String
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserConnectionEmail {
  """"""
  key: String
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserConnectionProvider {
  """"""
  key: String
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserConnectionConfirmed {
  """"""
  key: Boolean
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserConnectionBlocked {
  """"""
  key: Boolean
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserConnectionRole {
  """"""
  key: ID
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserConnectionCreated_by {
  """"""
  key: ID
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserConnectionUpdated_by {
  """"""
  key: ID
  """"""
  connection: UsersPermissionsUserConnection
}

""""""
type UsersPermissionsUserAggregator {
  """"""
  count: Int
  """"""
  totalCount: Int
}

""""""
type createUserPayload {
  """"""
  user: UsersPermissionsUser
}

""""""
type updateUserPayload {
  """"""
  user: UsersPermissionsUser
}

""""""
type deleteUserPayload {
  """"""
  user: UsersPermissionsUser
}

""""""
type ComponentPageButton {
  """"""
  id: ID!
  """"""
  label: String!
  """"""
  link: String!
}

""""""
type ComponentPageRibbon {
  """"""
  id: ID!
  """"""
  text: String
  """"""
  color: ENUM_COMPONENTPAGERIBBON_COLOR
  """"""
  size: ENUM_COMPONENTPAGERIBBON_SIZE
}

""""""
enum ENUM_COMPONENTPAGERIBBON_COLOR {
  """"""
  primary
  """"""
  secondary
}

""""""
enum ENUM_COMPONENTPAGERIBBON_SIZE {
  """"""
  normal
  """"""
  small
}

""""""
type Mutation {
  """"""
  createBanner(input: createBannerInput): createBannerPayload
  """"""
  updateBanner(input: updateBannerInput): updateBannerPayload
  """"""
  deleteBanner(input: deleteBannerInput): deleteBannerPayload
  """"""
  createCategory(input: createCategoryInput): createCategoryPayload
  """"""
  updateCategory(input: updateCategoryInput): updateCategoryPayload
  """"""
  deleteCategory(input: deleteCategoryInput): deleteCategoryPayload
  """"""
  createDeveloper(input: createDeveloperInput): createDeveloperPayload
  """"""
  updateDeveloper(input: updateDeveloperInput): updateDeveloperPayload
  """"""
  deleteDeveloper(input: deleteDeveloperInput): deleteDeveloperPayload
  """"""
  createGame(input: createGameInput): createGamePayload
  """"""
  updateGame(input: updateGameInput): updateGamePayload
  """"""
  deleteGame(input: deleteGameInput): deleteGamePayload
  """"""
  updateHome(input: updateHomeInput): updateHomePayload
  """"""
  deleteHome: deleteHomePayload
  """"""
  createPlatform(input: createPlatformInput): createPlatformPayload
  """"""
  updatePlatform(input: updatePlatformInput): updatePlatformPayload
  """"""
  deletePlatform(input: deletePlatformInput): deletePlatformPayload
  """"""
  createPublisher(input: createPublisherInput): createPublisherPayload
  """"""
  updatePublisher(input: updatePublisherInput): updatePublisherPayload
  """"""
  deletePublisher(input: deletePublisherInput): deletePublisherPayload
  """"""
  updateRecommended(input: updateRecommendedInput): updateRecommendedPayload
  """"""
  deleteRecommended: deleteRecommendedPayload
  """Create a new role"""
  createRole(input: createRoleInput): createRolePayload
  """Update an existing role"""
  updateRole(input: updateRoleInput): updateRolePayload
  """Delete an existing role"""
  deleteRole(input: deleteRoleInput): deleteRolePayload
  """Create a new user"""
  createUser(input: createUserInput): createUserPayload
  """Update an existing user"""
  updateUser(input: updateUserInput): updateUserPayload
  """Delete an existing user"""
  deleteUser(input: deleteUserInput): deleteUserPayload
  """"""
  upload(refId: ID, ref: String, field: String, source: String, file: Upload!): UploadFile!
  """"""
  multipleUpload(refId: ID, ref: String, field: String, source: String, files: [Upload]!): [UploadFile]!
  """"""
  login(input: UsersPermissionsLoginInput!): UsersPermissionsLoginPayload!
  """"""
  register(input: UsersPermissionsRegisterInput!): UsersPermissionsLoginPayload!
  """"""
  forgotPassword(email: String!): UserPermissionsPasswordPayload
  """"""
  resetPassword(password: String!, passwordConfirmation: String!, code: String!): UsersPermissionsLoginPayload
  """"""
  emailConfirmation(confirmation: String!): UsersPermissionsLoginPayload
}

""""""
input createBannerInput {
  """"""
  data: BannerInput
}

""""""
input BannerInput {
  """"""
  image: ID
  """"""
  title: String!
  """"""
  subtitle: String!
  """"""
  button: ComponentPageButtonInput!
  """"""
  ribbon: ComponentPageRibbonInput
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input ComponentPageButtonInput {
  """"""
  label: String
  """"""
  link: String!
}

""""""
input ComponentPageRibbonInput {
  """"""
  text: String
  """"""
  color: ENUM_COMPONENTPAGERIBBON_COLOR
  """"""
  size: ENUM_COMPONENTPAGERIBBON_SIZE
}

""""""
input updateBannerInput {
  """"""
  where: InputID
  """"""
  data: editBannerInput
}

""""""
input InputID {
  """"""
  id: ID!
}

""""""
input editBannerInput {
  """"""
  image: ID
  """"""
  title: String
  """"""
  subtitle: String
  """"""
  button: editComponentPageButtonInput
  """"""
  ribbon: editComponentPageRibbonInput
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input editComponentPageButtonInput {
  """"""
  id: ID
  """"""
  label: String
  """"""
  link: String
}

""""""
input editComponentPageRibbonInput {
  """"""
  id: ID
  """"""
  text: String
  """"""
  color: ENUM_COMPONENTPAGERIBBON_COLOR
  """"""
  size: ENUM_COMPONENTPAGERIBBON_SIZE
}

""""""
input deleteBannerInput {
  """"""
  where: InputID
}

""""""
input createCategoryInput {
  """"""
  data: CategoryInput
}

""""""
input CategoryInput {
  """"""
  name: String!
  """"""
  slug: String!
  """"""
  games: [ID]
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input updateCategoryInput {
  """"""
  where: InputID
  """"""
  data: editCategoryInput
}

""""""
input editCategoryInput {
  """"""
  name: String
  """"""
  slug: String
  """"""
  games: [ID]
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input deleteCategoryInput {
  """"""
  where: InputID
}

""""""
input createDeveloperInput {
  """"""
  data: DeveloperInput
}

""""""
input DeveloperInput {
  """"""
  name: String!
  """"""
  slug: String!
  """"""
  games: [ID]
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input updateDeveloperInput {
  """"""
  where: InputID
  """"""
  data: editDeveloperInput
}

""""""
input editDeveloperInput {
  """"""
  name: String
  """"""
  slug: String
  """"""
  games: [ID]
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input deleteDeveloperInput {
  """"""
  where: InputID
}

""""""
input createGameInput {
  """"""
  data: GameInput
}

""""""
input GameInput {
  """"""
  name: String!
  """"""
  slug: String!
  """"""
  short_description: String!
  """"""
  description: String
  """"""
  price: Float
  """"""
  release_date: Date
  """"""
  rating: ENUM_GAME_RATING
  """"""
  cover: ID
  """"""
  gallery: [ID]
  """"""
  categories: [ID]
  """"""
  developers: [ID]
  """"""
  platforms: [ID]
  """"""
  publisher: ID
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input updateGameInput {
  """"""
  where: InputID
  """"""
  data: editGameInput
}

""""""
input editGameInput {
  """"""
  name: String
  """"""
  slug: String
  """"""
  short_description: String
  """"""
  description: String
  """"""
  price: Float
  """"""
  release_date: Date
  """"""
  rating: ENUM_GAME_RATING
  """"""
  cover: ID
  """"""
  gallery: [ID]
  """"""
  categories: [ID]
  """"""
  developers: [ID]
  """"""
  platforms: [ID]
  """"""
  publisher: ID
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input deleteGameInput {
  """"""
  where: InputID
}

""""""
input updateHomeInput {
  """"""
  data: editHomeInput
}

""""""
input editHomeInput {
  """"""
  newGames: editComponentPageSectionInput
  """"""
  upcomingGames: editComponentPageSectionInput
  """"""
  freeGames: editComponentPageSectionInput
  """"""
  popularGames: editComponentPagePopularGameInput
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input editComponentPageSectionInput {
  """"""
  id: ID
  """"""
  title: String
  """"""
  highlight: editComponentPageHighlightInput
}

""""""
input editComponentPageHighlightInput {
  """"""
  id: ID
  """"""
  title: String
  """"""
  subtitle: String
  """"""
  background: ID
  """"""
  floatImage: ID
  """"""
  buttonLabel: String
  """"""
  buttonLink: String
  """"""
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT
}

""""""
input editComponentPagePopularGameInput {
  """"""
  id: ID
  """"""
  title: String
  """"""
  highlight: editComponentPageHighlightInput
  """"""
  games: [ID]
}

""""""
input createPlatformInput {
  """"""
  data: PlatformInput
}

""""""
input PlatformInput {
  """"""
  name: String!
  """"""
  slug: String!
  """"""
  games: [ID]
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input updatePlatformInput {
  """"""
  where: InputID
  """"""
  data: editPlatformInput
}

""""""
input editPlatformInput {
  """"""
  name: String
  """"""
  slug: String
  """"""
  games: [ID]
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input deletePlatformInput {
  """"""
  where: InputID
}

""""""
input createPublisherInput {
  """"""
  data: PublisherInput
}

""""""
input PublisherInput {
  """"""
  games: [ID]
  """"""
  name: String!
  """"""
  slug: String
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input updatePublisherInput {
  """"""
  where: InputID
  """"""
  data: editPublisherInput
}

""""""
input editPublisherInput {
  """"""
  games: [ID]
  """"""
  name: String
  """"""
  slug: String
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input deletePublisherInput {
  """"""
  where: InputID
}

""""""
input updateRecommendedInput {
  """"""
  data: editRecommendedInput
}

""""""
input editRecommendedInput {
  """"""
  section: editComponentPagePopularGameInput
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input createRoleInput {
  """"""
  data: RoleInput
}

""""""
input RoleInput {
  """"""
  name: String!
  """"""
  description: String
  """"""
  type: String
  """"""
  permissions: [ID]
  """"""
  users: [ID]
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input updateRoleInput {
  """"""
  where: InputID
  """"""
  data: editRoleInput
}

""""""
input editRoleInput {
  """"""
  name: String
  """"""
  description: String
  """"""
  type: String
  """"""
  permissions: [ID]
  """"""
  users: [ID]
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input deleteRoleInput {
  """"""
  where: InputID
}

""""""
input createUserInput {
  """"""
  data: UserInput
}

""""""
input UserInput {
  """"""
  username: String!
  """"""
  email: String!
  """"""
  provider: String
  """"""
  password: String
  """"""
  resetPasswordToken: String
  """"""
  confirmed: Boolean
  """"""
  blocked: Boolean
  """"""
  role: ID
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input updateUserInput {
  """"""
  where: InputID
  """"""
  data: editUserInput
}

""""""
input editUserInput {
  """"""
  username: String
  """"""
  email: String
  """"""
  provider: String
  """"""
  password: String
  """"""
  resetPasswordToken: String
  """"""
  confirmed: Boolean
  """"""
  blocked: Boolean
  """"""
  role: ID
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input deleteUserInput {
  """"""
  where: InputID
}

"""The `Upload` scalar type represents a file upload."""
scalar Upload

""""""
input UsersPermissionsLoginInput {
  """"""
  identifier: String!
  """"""
  password: String!
  """"""
  provider: String = "local"
}

""""""
input UsersPermissionsRegisterInput {
  """"""
  username: String!
  """"""
  email: String!
  """"""
  password: String!
}

""""""
input HomeInput {
  """"""
  newGames: ComponentPageSectionInput
  """"""
  upcomingGames: ComponentPageSectionInput
  """"""
  freeGames: ComponentPageSectionInput
  """"""
  popularGames: ComponentPagePopularGameInput
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input ComponentPageSectionInput {
  """"""
  title: String
  """"""
  highlight: ComponentPageHighlightInput
}

""""""
input ComponentPageHighlightInput {
  """"""
  title: String!
  """"""
  subtitle: String!
  """"""
  background: ID
  """"""
  floatImage: ID
  """"""
  buttonLabel: String!
  """"""
  buttonLink: String!
  """"""
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT
}

""""""
input ComponentPagePopularGameInput {
  """"""
  title: String
  """"""
  highlight: ComponentPageHighlightInput
  """"""
  games: [ID]
}

""""""
input RecommendedInput {
  """"""
  section: ComponentPagePopularGameInput!
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input FileInput {
  """"""
  name: String!
  """"""
  alternativeText: String
  """"""
  caption: String
  """"""
  width: Int
  """"""
  height: Int
  """"""
  formats: JSON
  """"""
  hash: String!
  """"""
  ext: String
  """"""
  mime: String!
  """"""
  size: Float!
  """"""
  url: String!
  """"""
  previewUrl: String
  """"""
  provider: String!
  """"""
  provider_metadata: JSON
  """"""
  related: [ID]
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

""""""
input editFileInput {
  """"""
  name: String
  """"""
  alternativeText: String
  """"""
  caption: String
  """"""
  width: Int
  """"""
  height: Int
  """"""
  formats: JSON
  """"""
  hash: String
  """"""
  ext: String
  """"""
  mime: String
  """"""
  size: Float
  """"""
  url: String
  """"""
  previewUrl: String
  """"""
  provider: String
  """"""
  provider_metadata: JSON
  """"""
  related: [ID]
  """"""
  created_by: ID
  """"""
  updated_by: ID
}

"""A time string with format: HH:mm:ss.SSS"""
scalar Time

"""The `Long` scalar type represents 52-bit integers"""
scalar Long

""""""
enum CacheControlScope {
  """"""
  PUBLIC
  """"""
  PRIVATE
}
`