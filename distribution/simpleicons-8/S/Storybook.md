# Storybook


```text
simpleicons-8/S/Storybook
```

```text
include('simpleicons-8/S/Storybook')
```



| Illustration | Storybook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Storybook.png) | ![illustration for Storybook](../../simpleicons-8/S/Storybook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StorybookXs>`
- `<$StorybookSm>`
- `<$StorybookMd>`
- `<$StorybookLg>`





## Storybook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Storybook
include('simpleicons-8/S/Storybook')

' renders the element
Storybook('Storybook', 'Storybook', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Storybook
include('simpleicons-8/S/Storybook')

' renders the element
Storybook('Storybook', 'Storybook', 'an optional tech label', 'an optional description')
@enduml
```

