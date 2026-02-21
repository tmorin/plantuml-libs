# Grade


```text
material/Action/Grade
```

```text
include('material/Action/Grade')
```



| Illustration | Grade |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Grade.png) | ![illustration for Grade](../../material/Action/Grade.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GradeXs>`
- `<$GradeSm>`
- `<$GradeMd>`
- `<$GradeLg>`





## Grade

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Grade
include('material/Action/Grade')

' renders the element
Grade('Grade', 'Grade', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Grade
include('material/Action/Grade')

' renders the element
Grade('Grade', 'Grade', 'an optional tech label', 'an optional description')
@enduml
```

