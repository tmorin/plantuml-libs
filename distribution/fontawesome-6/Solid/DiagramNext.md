# DiagramNext


```text
fontawesome-6/Solid/DiagramNext
```

```text
include('fontawesome-6/Solid/DiagramNext')
```



| Illustration | DiagramNext |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DiagramNext.png) | ![illustration for DiagramNext](../../fontawesome-6/Solid/DiagramNext.Local.png) |




## DiagramNext

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DiagramNext
include('fontawesome-6/Solid/DiagramNext')

' renders the element
DiagramNext('DiagramNext', 'Diagram Next', 'an optional tech label')
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

' loads the Item which embeds the element DiagramNext
include('fontawesome-6/Solid/DiagramNext')

' renders the element
DiagramNext('DiagramNext', 'Diagram Next', 'an optional tech label')
@enduml
```

