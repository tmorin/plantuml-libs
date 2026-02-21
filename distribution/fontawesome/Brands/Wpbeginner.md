# Wpbeginner


```text
fontawesome/Brands/Wpbeginner
```

```text
include('fontawesome/Brands/Wpbeginner')
```



| Illustration | Wpbeginner |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Wpbeginner.png) | ![illustration for Wpbeginner](../../fontawesome/Brands/Wpbeginner.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WpbeginnerXs>`
- `<$WpbeginnerSm>`
- `<$WpbeginnerMd>`
- `<$WpbeginnerLg>`





## Wpbeginner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wpbeginner
include('fontawesome/Brands/Wpbeginner')

' renders the element
Wpbeginner('Wpbeginner', 'Wpbeginner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wpbeginner
include('fontawesome/Brands/Wpbeginner')

' renders the element
Wpbeginner('Wpbeginner', 'Wpbeginner', 'an optional tech label', 'an optional description')
@enduml
```

