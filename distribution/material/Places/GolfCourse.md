# GolfCourse


```text
material/Places/GolfCourse
```

```text
include('material/Places/GolfCourse')
```



| Illustration | GolfCourse |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/GolfCourse.png) | ![illustration for GolfCourse](../../material/Places/GolfCourse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GolfCourseXs>`
- `<$GolfCourseSm>`
- `<$GolfCourseMd>`
- `<$GolfCourseLg>`





## GolfCourse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element GolfCourse
include('material/Places/GolfCourse')

' renders the element
GolfCourse('GolfCourse', 'Golf Course', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element GolfCourse
include('material/Places/GolfCourse')

' renders the element
GolfCourse('GolfCourse', 'Golf Course', 'an optional tech label', 'an optional description')
@enduml
```

