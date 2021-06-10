# Map


```text
fontawesome-5/Solid/Map
```

```text
include('fontawesome-5/Solid/Map')
```



| Illustration | Map |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Map.png) | ![illustration for Map](../../fontawesome-5/Solid/Map.Local.png) |




## Map

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Map
include('fontawesome-5/Solid/Map')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Map
include('fontawesome-5/Solid/Map')

' renders the element
Map('Map', 'Map', 'an optional tech label')
@enduml
```

