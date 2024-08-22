# @medusajs/ui-preset

## 1.1.4

### Patch Changes

- [`52520d9080`](https://github.com/medusajs/medusa/commit/52520d90800e473e89254c4a424d5dffc6edfc30) Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Add missing changeset

## 1.1.3

### Patch Changes

- [#6680](https://github.com/medusajs/medusa/pull/6680) [`26531c5a38`](https://github.com/medusajs/medusa/commit/26531c5a38bf09ab3e77a1444cefd65a073ae713) Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(ui-preset): Pull latest styles from Figma.
  fix(ui): Fix invalid state styling of Select, so it correctly shows when aria-invalid is true.
  fix(medusa): Align query params between `/admin/products/:id/variants` and `/admin/variants`.
  chore(client-types): Update `medusa` client types to reflect changes to the API.

## 1.1.2

### Patch Changes

- [#6357](https://github.com/medusajs/medusa/pull/6357) [`85a44dfd0`](https://github.com/medusajs/medusa/commit/85a44dfd017ab53b539bcfca04a32f1a0786a23c) Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(ui,ui-preset): Fixes an issue where the color styles of two code components was broken

## 1.1.1

### Patch Changes

- [#6297](https://github.com/medusajs/medusa/pull/6297) [`8cbf6c60f`](https://github.com/medusajs/medusa/commit/8cbf6c60fec7fe8ddf59dcf420b9339f84b8636c) Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(ui,ui-preset): Update to latest version of TailwindCSS. Increase spacing between columns in <Table /> component.

## 1.1.0

### Minor Changes

- [#6061](https://github.com/medusajs/medusa/pull/6061) [`a2c149e7e5`](https://github.com/medusajs/medusa/commit/a2c149e7e588a9ebf080b4b43472bdb5126ed981) Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(ui): Updates spacing and sizing of components. Introduces new `size` variants for some components, such as `Button`, `IconButton`, and `Avatar`. Change most `:focus` styles to `:focus-visible` styles, to prevenent focus styles from being visible when not needed, such as on button clicks.
  feat(ui-preset): Publishes latest updates to our design system styles, as well as adding new colors. Noticable changes include changing `ui-code-text-*` styles to `ui-code-fg-*` for better consistency.
  feat(icons): Updates the `LockClosedSolid` and `LockOpenSolid` icons, and introduces four new icons: `LockClosedSolidMini`, `TriangleLeftMini`, `TriangleRightMini`, and `TriangleMini`.

## 1.0.2

### Patch Changes

- 035fa72: feat(ui,ui-preset): Release 2.1.0

  ## `@medusajs/ui`

  - The styling of buttons, inputs, and the CommandBar has been adjusted to have a more consistent look and feel.
  - Fixed an issue that caused DropdownMenu.Content to overflow the viewport.
  - Fixed an issue with the DatePicker component where deleting a time segment would throw an error.
  - The Text component now accepts a `leading` prop to adjust the line height. It can be set to `normal` (default) or `compact`. This change in the API is fully backwards compatible.
  - Adds a new subcomponent to RadioGroup called RadioGroup.ChoiceBox. This component wraps the RadioGroup.Item component with a mandatory label and description.

  ## `@medusajs/ui-preset`

  - Updated several colors, shadows, and gradient effects.

  ## `@medusajs/icons`

  - Introduces 6 new icons: QuestionMark, SparklesMiniSolid, SparklesMini, ThumbDown, ThumbUp, and UserCircleMini.
  - There have been slight adjustments made to ArrowPathMini, EllipseBlueSolid, EllipseGreenSolid, EllipseGreySolid, EllipseOrangeSolid, EllipsePurpleSolid, and EllipseRedSolid.

## 1.0.1

### Patch Changes

- ef98084: feat(ui,icons,ui-preset): Update to Medusa UI, including new components, icons, and preset styles.

  # Changes in `@medusajs/ui`

  ## New components

  - `IconButton` - A button that only contains an icon.
  - `IconBadge` - A badge that only contains an icon.
  - `StatusBadge` - A badge component specifically designed to be used for displaying statuses.
  - `Tabs` - A tab component that can be used to switch between different views.
  - `ProgressTabs` - A tab component specifically designed to be used for building multi-step tasks.
  - `ProgressAccordion` - An accordion component specifically designed to be used for building multi-step tasks.
  - `CurrencyInput` - An input component that can be used to input currency values.
  - `CommandBar` - A component that can be used to display a list of keyboard commands omn the screen.
  - `CurrencyInput` - An input component that can be used to input currency values, such as prices.

  ## Breaking changes

  Several components have been reorganized to streamline their API. The following components have breaking changes:

  - Button - The `format` property has been removed. To create a Icon only button, use the new `IconButton` component.
  - Badge - The `format` property has been removed. To create a Icon only badge, use the new `IconBadge` component. The border radius of the component is now controlled using the new `rounded` property.
  - CodeBlock - The `hideLineNumbers` property has been moved to the `snippets` property. This allows users to control the visibility of line numbers on a per snippet basis.

  ## Other changes

  - The `z-index`'s of all components have been cleaned up to to make stacking portalled components easier.
  - `Table.Pagination` has been tweaked to ensure that it displays the correct number of pages when there is no data.
  - `Calendar` has been tweaked to prevent clicking a date from submitting any forms that precede it in the DOM.

  # Changes in `@medusajs/icons`

  ## New icons

  - `X`
  - `AcademicCap`
  - `Figma`
  - `Photo`
  - `PuzzleSolid`
  - `Text`

  # Changes in `@medusajs/ui-preset`

  Minor tweaks to colors, typography, and animations.

## 1.0.0

### Major Changes

- 8d31ce6: Release of the Medusa UI design system, includes three new packages: `@medusajs/ui` a set of React components, hooks, and utils; `@medusajs/icons` a set of React icons; `@medusajs/ui-preset` a Tailwind CSS preset containing Medusa UI design tokens.