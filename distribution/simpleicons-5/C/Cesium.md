# Cesium


```text
simpleicons-5/C/Cesium
```

```text
include('simpleicons-5/C/Cesium')
```



| Illustration | Cesium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cesium.png) | ![illustration for Cesium](../../simpleicons-5/C/Cesium.Local.png) |




## Cesium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cesium
include('simpleicons-5/C/Cesium')

' renders the element
Cesium('Cesium', 'Cesium', 'an optional tech label')
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

' loads the Item which embeds the element Cesium
include('simpleicons-5/C/Cesium')

' renders the element
Cesium('Cesium', 'Cesium', 'an optional tech label')
@enduml
```

