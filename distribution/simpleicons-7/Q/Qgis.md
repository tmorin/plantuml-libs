# Qgis


```text
simpleicons-7/Q/Qgis
```

```text
include('simpleicons-7/Q/Qgis')
```



| Illustration | Qgis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Q/Qgis.png) | ![illustration for Qgis](../../simpleicons-7/Q/Qgis.Local.png) |




## Qgis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Qgis
include('simpleicons-7/Q/Qgis')

' renders the element
Qgis('Qgis', 'Qgis', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Qgis
include('simpleicons-7/Q/Qgis')

' renders the element
Qgis('Qgis', 'Qgis', 'an optional tech label')
@enduml
```

