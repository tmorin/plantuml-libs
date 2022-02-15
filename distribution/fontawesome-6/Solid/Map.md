# Map


```text
fontawesome-6/Solid/Map
```

```text
include('fontawesome-6/Solid/Map')
```



| Illustration | Map |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Map.png) | ![illustration for Map](../../fontawesome-6/Solid/Map.Local.png) |




## Map

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Map
include('fontawesome-6/Solid/Map')

' renders the element
Map('Map', 'Map', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Map
include('fontawesome-6/Solid/Map')

' renders the element
Map('Map', 'Map', 'an optional tech label')
@enduml
```

