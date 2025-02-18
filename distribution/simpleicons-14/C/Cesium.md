# Cesium


```text
simpleicons-14/C/Cesium
```

```text
include('simpleicons-14/C/Cesium')
```



| Illustration | Cesium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cesium.png) | ![illustration for Cesium](../../simpleicons-14/C/Cesium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CesiumXs>`
- `<$CesiumSm>`
- `<$CesiumMd>`
- `<$CesiumLg>`





## Cesium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cesium
include('simpleicons-14/C/Cesium')

' renders the element
Cesium('Cesium', 'Cesium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cesium
include('simpleicons-14/C/Cesium')

' renders the element
Cesium('Cesium', 'Cesium', 'an optional tech label', 'an optional description')
@enduml
```

