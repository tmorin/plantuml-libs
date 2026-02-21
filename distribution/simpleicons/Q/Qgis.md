# Qgis


```text
simpleicons/Q/Qgis
```

```text
include('simpleicons/Q/Qgis')
```



| Illustration | Qgis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Qgis.png) | ![illustration for Qgis](../../simpleicons/Q/Qgis.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QgisXs>`
- `<$QgisSm>`
- `<$QgisMd>`
- `<$QgisLg>`





## Qgis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qgis
include('simpleicons/Q/Qgis')

' renders the element
Qgis('Qgis', 'Qgis', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qgis
include('simpleicons/Q/Qgis')

' renders the element
Qgis('Qgis', 'Qgis', 'an optional tech label', 'an optional description')
@enduml
```

