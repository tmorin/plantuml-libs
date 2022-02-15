# DiagramProject


```text
fontawesome-6/Solid/DiagramProject
```

```text
include('fontawesome-6/Solid/DiagramProject')
```



| Illustration | DiagramProject |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DiagramProject.png) | ![illustration for DiagramProject](../../fontawesome-6/Solid/DiagramProject.Local.png) |




## DiagramProject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DiagramProject
include('fontawesome-6/Solid/DiagramProject')

' renders the element
DiagramProject('DiagramProject', 'Diagram Project', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DiagramProject
include('fontawesome-6/Solid/DiagramProject')

' renders the element
DiagramProject('DiagramProject', 'Diagram Project', 'an optional tech label')
@enduml
```

