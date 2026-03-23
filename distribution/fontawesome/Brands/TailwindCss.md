# TailwindCss


```text
fontawesome/Brands/TailwindCss
```

```text
include('fontawesome/Brands/TailwindCss')
```



| Illustration | TailwindCss |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/TailwindCss.png) | ![illustration for TailwindCss](../../fontawesome/Brands/TailwindCss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TailwindCssXs>`
- `<$TailwindCssSm>`
- `<$TailwindCssMd>`
- `<$TailwindCssLg>`





## TailwindCss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TailwindCss
include('fontawesome/Brands/TailwindCss')

' renders the element
TailwindCss('TailwindCss', 'Tailwind Css', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TailwindCss
include('fontawesome/Brands/TailwindCss')

' renders the element
TailwindCss('TailwindCss', 'Tailwind Css', 'an optional tech label', 'an optional description')
@enduml
```

