# AssignmentReturned


```text
material-4/Action/AssignmentReturned
```

```text
include('material-4/Action/AssignmentReturned')
```



| Illustration | AssignmentReturned |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AssignmentReturned.png) | ![illustration for AssignmentReturned](../../material-4/Action/AssignmentReturned.Local.png) |




## AssignmentReturned

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AssignmentReturned
include('material-4/Action/AssignmentReturned')

' renders the element
AssignmentReturned('AssignmentReturned', 'Assignment Returned', 'an optional tech label')
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

' loads the Item which embeds the element AssignmentReturned
include('material-4/Action/AssignmentReturned')

' renders the element
AssignmentReturned('AssignmentReturned', 'Assignment Returned', 'an optional tech label')
@enduml
```

