# TvAlt


```text
fontawesome/Solid/TvAlt
```

```text
include('fontawesome/Solid/TvAlt')
```



| Illustration | TvAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TvAlt.png) | ![illustration for TvAlt](../../fontawesome/Solid/TvAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TvAltXs>`
- `<$TvAltSm>`
- `<$TvAltMd>`
- `<$TvAltLg>`





## TvAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TvAlt
include('fontawesome/Solid/TvAlt')

' renders the element
TvAlt('TvAlt', 'Tv Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TvAlt
include('fontawesome/Solid/TvAlt')

' renders the element
TvAlt('TvAlt', 'Tv Alt', 'an optional tech label', 'an optional description')
@enduml
```

