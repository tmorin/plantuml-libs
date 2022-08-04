# DiagramSuccessor


```text
fontawesome-6/Solid/DiagramSuccessor
```

```text
include('fontawesome-6/Solid/DiagramSuccessor')
```



| Illustration | DiagramSuccessor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DiagramSuccessor.png) | ![illustration for DiagramSuccessor](../../fontawesome-6/Solid/DiagramSuccessor.Local.png) |




## DiagramSuccessor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DiagramSuccessor
include('fontawesome-6/Solid/DiagramSuccessor')

' renders the element
DiagramSuccessor('DiagramSuccessor', 'Diagram Successor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DiagramSuccessor
include('fontawesome-6/Solid/DiagramSuccessor')

' renders the element
DiagramSuccessor('DiagramSuccessor', 'Diagram Successor', 'an optional tech label', 'an optional description')
@enduml
```

