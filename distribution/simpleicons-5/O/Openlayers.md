# Openlayers


```text
simpleicons-5/O/Openlayers
```

```text
include('simpleicons-5/O/Openlayers')
```



| Illustration | Openlayers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Openlayers.png) | ![illustration for Openlayers](../../simpleicons-5/O/Openlayers.Local.png) |




## Openlayers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openlayers
include('simpleicons-5/O/Openlayers')

' renders the element
Openlayers('Openlayers', 'Openlayers', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openlayers
include('simpleicons-5/O/Openlayers')

' renders the element
Openlayers('Openlayers', 'Openlayers', 'an optional tech label')
@enduml
```

