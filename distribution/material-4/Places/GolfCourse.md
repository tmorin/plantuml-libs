# GolfCourse


```text
material-4/Places/GolfCourse
```

```text
include('material-4/Places/GolfCourse')
```



| Illustration | GolfCourse |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/GolfCourse.png) | ![illustration for GolfCourse](../../material-4/Places/GolfCourse.Local.png) |




## GolfCourse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element GolfCourse
include('material-4/Places/GolfCourse')

' renders the element
GolfCourse('GolfCourse', 'Golf Course', 'an optional tech label')
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

' loads the Item which embeds the element GolfCourse
include('material-4/Places/GolfCourse')

' renders the element
GolfCourse('GolfCourse', 'Golf Course', 'an optional tech label')
@enduml
```

