# Tv


```text
fontawesome/Solid/Tv
```

```text
include('fontawesome/Solid/Tv')
```



| Illustration | Tv |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tv.png) | ![illustration for Tv](../../fontawesome/Solid/Tv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TvXs>`
- `<$TvSm>`
- `<$TvMd>`
- `<$TvLg>`





## Tv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tv
include('fontawesome/Solid/Tv')

' renders the element
Tv('Tv', 'Tv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tv
include('fontawesome/Solid/Tv')

' renders the element
Tv('Tv', 'Tv', 'an optional tech label', 'an optional description')
@enduml
```

