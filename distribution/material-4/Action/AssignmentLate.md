# AssignmentLate


```text
material-4/Action/AssignmentLate
```

```text
include('material-4/Action/AssignmentLate')
```



| Illustration | AssignmentLate |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AssignmentLate.png) | ![illustration for AssignmentLate](../../material-4/Action/AssignmentLate.Local.png) |




## AssignmentLate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AssignmentLate
include('material-4/Action/AssignmentLate')

' renders the element
AssignmentLate('AssignmentLate', 'Assignment Late', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AssignmentLate
include('material-4/Action/AssignmentLate')

' renders the element
AssignmentLate('AssignmentLate', 'Assignment Late', 'an optional tech label', 'an optional description')
@enduml
```

