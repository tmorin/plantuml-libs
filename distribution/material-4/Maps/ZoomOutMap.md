# ZoomOutMap


```text
material-4/Maps/ZoomOutMap
```

```text
include('material-4/Maps/ZoomOutMap')
```



| Illustration | ZoomOutMap |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/ZoomOutMap.png) | ![illustration for ZoomOutMap](../../material-4/Maps/ZoomOutMap.Local.png) |




## ZoomOutMap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ZoomOutMap
include('material-4/Maps/ZoomOutMap')

' renders the element
ZoomOutMap('ZoomOutMap', 'Zoom Out Map', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element ZoomOutMap
include('material-4/Maps/ZoomOutMap')

' renders the element
ZoomOutMap('ZoomOutMap', 'Zoom Out Map', 'an optional tech label')
@enduml
```

