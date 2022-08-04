# Grade


```text
material-4/Action/Grade
```

```text
include('material-4/Action/Grade')
```



| Illustration | Grade |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Grade.png) | ![illustration for Grade](../../material-4/Action/Grade.Local.png) |




## Grade

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Grade
include('material-4/Action/Grade')

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
include('material-4/bootstrap')

' loads the Item which embeds the element Grade
include('material-4/Action/Grade')

' renders the element
Grade('Grade', 'Grade', 'an optional tech label', 'an optional description')
@enduml
```

