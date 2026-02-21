# Maplibre


```text
simpleicons/M/Maplibre
```

```text
include('simpleicons/M/Maplibre')
```



| Illustration | Maplibre |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Maplibre.png) | ![illustration for Maplibre](../../simpleicons/M/Maplibre.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaplibreXs>`
- `<$MaplibreSm>`
- `<$MaplibreMd>`
- `<$MaplibreLg>`





## Maplibre

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Maplibre
include('simpleicons/M/Maplibre')

' renders the element
Maplibre('Maplibre', 'Maplibre', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maplibre
include('simpleicons/M/Maplibre')

' renders the element
Maplibre('Maplibre', 'Maplibre', 'an optional tech label', 'an optional description')
@enduml
```

