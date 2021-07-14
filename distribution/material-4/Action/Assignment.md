# Assignment


```text
material-4/Action/Assignment
```

```text
include('material-4/Action/Assignment')
```



| Illustration | Assignment |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Assignment.png) | ![illustration for Assignment](../../material-4/Action/Assignment.Local.png) |




## Assignment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Assignment
include('material-4/Action/Assignment')

' renders the element
Assignment('Assignment', 'Assignment', 'an optional tech label')
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

' loads the Item which embeds the element Assignment
include('material-4/Action/Assignment')

' renders the element
Assignment('Assignment', 'Assignment', 'an optional tech label')
@enduml
```

