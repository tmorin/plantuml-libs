# Kickstarter


```text
fontawesome-6/Brands/Kickstarter
```

```text
include('fontawesome-6/Brands/Kickstarter')
```



| Illustration | Kickstarter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Kickstarter.png) | ![illustration for Kickstarter](../../fontawesome-6/Brands/Kickstarter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KickstarterXs>`
- `<$KickstarterSm>`
- `<$KickstarterMd>`
- `<$KickstarterLg>`





## Kickstarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Kickstarter
include('fontawesome-6/Brands/Kickstarter')

' renders the element
Kickstarter('Kickstarter', 'Kickstarter', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Kickstarter
include('fontawesome-6/Brands/Kickstarter')

' renders the element
Kickstarter('Kickstarter', 'Kickstarter', 'an optional tech label', 'an optional description')
@enduml
```

