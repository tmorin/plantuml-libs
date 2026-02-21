# DiagramSuccessor


```text
fontawesome/Solid/DiagramSuccessor
```

```text
include('fontawesome/Solid/DiagramSuccessor')
```



| Illustration | DiagramSuccessor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DiagramSuccessor.png) | ![illustration for DiagramSuccessor](../../fontawesome/Solid/DiagramSuccessor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiagramSuccessorXs>`
- `<$DiagramSuccessorSm>`
- `<$DiagramSuccessorMd>`
- `<$DiagramSuccessorLg>`





## DiagramSuccessor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DiagramSuccessor
include('fontawesome/Solid/DiagramSuccessor')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element DiagramSuccessor
include('fontawesome/Solid/DiagramSuccessor')

' renders the element
DiagramSuccessor('DiagramSuccessor', 'Diagram Successor', 'an optional tech label', 'an optional description')
@enduml
```

