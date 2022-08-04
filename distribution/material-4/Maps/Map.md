# Map


```text
material-4/Maps/Map
```

```text
include('material-4/Maps/Map')
```



| Illustration | Map |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Map.png) | ![illustration for Map](../../material-4/Maps/Map.Local.png) |




## Map

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Map
include('material-4/Maps/Map')

' renders the element
Map('Map', 'Map', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Map
include('material-4/Maps/Map')

' renders the element
Map('Map', 'Map', 'an optional tech label', 'an optional description')
@enduml
```

