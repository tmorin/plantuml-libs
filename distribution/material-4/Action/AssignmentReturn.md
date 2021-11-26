# AssignmentReturn


```text
material-4/Action/AssignmentReturn
```

```text
include('material-4/Action/AssignmentReturn')
```



| Illustration | AssignmentReturn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AssignmentReturn.png) | ![illustration for AssignmentReturn](../../material-4/Action/AssignmentReturn.Local.png) |




## AssignmentReturn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AssignmentReturn
include('material-4/Action/AssignmentReturn')

' renders the element
AssignmentReturn('AssignmentReturn', 'Assignment Return', 'an optional tech label')
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

' loads the Item which embeds the element AssignmentReturn
include('material-4/Action/AssignmentReturn')

' renders the element
AssignmentReturn('AssignmentReturn', 'Assignment Return', 'an optional tech label')
@enduml
```

