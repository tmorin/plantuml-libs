# Sonarr


```text
simpleicons/S/Sonarr
```

```text
include('simpleicons/S/Sonarr')
```



| Illustration | Sonarr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sonarr.png) | ![illustration for Sonarr](../../simpleicons/S/Sonarr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonarrXs>`
- `<$SonarrSm>`
- `<$SonarrMd>`
- `<$SonarrLg>`





## Sonarr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sonarr
include('simpleicons/S/Sonarr')

' renders the element
Sonarr('Sonarr', 'Sonarr', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sonarr
include('simpleicons/S/Sonarr')

' renders the element
Sonarr('Sonarr', 'Sonarr', 'an optional tech label', 'an optional description')
@enduml
```

