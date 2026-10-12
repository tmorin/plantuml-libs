# Storybook


```text
fontawesome/Brands/Storybook
```

```text
include('fontawesome/Brands/Storybook')
```



| Illustration | Storybook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Storybook.png) | ![illustration for Storybook](../../fontawesome/Brands/Storybook.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Storybook
include('fontawesome/Brands/Storybook')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Storybook
include('fontawesome/Brands/Storybook')

' renders the element
Storybook('Storybook', 'Storybook', 'an optional tech label', 'an optional description')
@enduml
```

