# DirectionsWalk


```text
material-4/Maps/DirectionsWalk
```

```text
include('material-4/Maps/DirectionsWalk')
```



| Illustration | DirectionsWalk |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/DirectionsWalk.png) | ![illustration for DirectionsWalk](../../material-4/Maps/DirectionsWalk.Local.png) |




## DirectionsWalk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DirectionsWalk
include('material-4/Maps/DirectionsWalk')

' renders the element
DirectionsWalk('DirectionsWalk', 'Directions Walk', 'an optional tech label')
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

' loads the Item which embeds the element DirectionsWalk
include('material-4/Maps/DirectionsWalk')

' renders the element
DirectionsWalk('DirectionsWalk', 'Directions Walk', 'an optional tech label')
@enduml
```

