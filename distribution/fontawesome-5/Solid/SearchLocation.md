# SearchLocation


```text
fontawesome-5/Solid/SearchLocation
```

```text
include('fontawesome-5/Solid/SearchLocation')
```



| Illustration | SearchLocation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SearchLocation.png) | ![illustration for SearchLocation](../../fontawesome-5/Solid/SearchLocation.Local.png) |




## SearchLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SearchLocation
include('fontawesome-5/Solid/SearchLocation')

' renders the element
SearchLocation('SearchLocation', 'Search Location', 'an optional tech label')
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

' loads the Item which embeds the element SearchLocation
include('fontawesome-5/Solid/SearchLocation')

' renders the element
SearchLocation('SearchLocation', 'Search Location', 'an optional tech label')
@enduml
```

