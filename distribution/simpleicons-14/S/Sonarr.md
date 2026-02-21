# Sonarr


```text
simpleicons-14/S/Sonarr
```

```text
include('simpleicons-14/S/Sonarr')
```



| Illustration | Sonarr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sonarr.png) | ![illustration for Sonarr](../../simpleicons-14/S/Sonarr.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sonarr
include('simpleicons-14/S/Sonarr')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sonarr
include('simpleicons-14/S/Sonarr')

' renders the element
Sonarr('Sonarr', 'Sonarr', 'an optional tech label', 'an optional description')
@enduml
```

