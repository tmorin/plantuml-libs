# DirectionsBus


```text
material-4/Maps/DirectionsBus
```

```text
include('material-4/Maps/DirectionsBus')
```



| Illustration | DirectionsBus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/DirectionsBus.png) | ![illustration for DirectionsBus](../../material-4/Maps/DirectionsBus.Local.png) |




## DirectionsBus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DirectionsBus
include('material-4/Maps/DirectionsBus')

' renders the element
DirectionsBus('DirectionsBus', 'Directions Bus', 'an optional tech label')
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

' loads the Item which embeds the element DirectionsBus
include('material-4/Maps/DirectionsBus')

' renders the element
DirectionsBus('DirectionsBus', 'Directions Bus', 'an optional tech label')
@enduml
```

