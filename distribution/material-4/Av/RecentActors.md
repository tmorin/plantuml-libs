# RecentActors


```text
material-4/Av/RecentActors
```

```text
include('material-4/Av/RecentActors')
```



| Illustration | RecentActors |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/RecentActors.png) | ![illustration for RecentActors](../../material-4/Av/RecentActors.Local.png) |




## RecentActors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RecentActors
include('material-4/Av/RecentActors')

' renders the element
RecentActors('RecentActors', 'Recent Actors', 'an optional tech label')
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

' loads the Item which embeds the element RecentActors
include('material-4/Av/RecentActors')

' renders the element
RecentActors('RecentActors', 'Recent Actors', 'an optional tech label')
@enduml
```

