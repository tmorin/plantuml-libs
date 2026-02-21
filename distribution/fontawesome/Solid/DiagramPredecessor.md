# DiagramPredecessor


```text
fontawesome/Solid/DiagramPredecessor
```

```text
include('fontawesome/Solid/DiagramPredecessor')
```



| Illustration | DiagramPredecessor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DiagramPredecessor.png) | ![illustration for DiagramPredecessor](../../fontawesome/Solid/DiagramPredecessor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiagramPredecessorXs>`
- `<$DiagramPredecessorSm>`
- `<$DiagramPredecessorMd>`
- `<$DiagramPredecessorLg>`





## DiagramPredecessor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DiagramPredecessor
include('fontawesome/Solid/DiagramPredecessor')

' renders the element
DiagramPredecessor('DiagramPredecessor', 'Diagram Predecessor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DiagramPredecessor
include('fontawesome/Solid/DiagramPredecessor')

' renders the element
DiagramPredecessor('DiagramPredecessor', 'Diagram Predecessor', 'an optional tech label', 'an optional description')
@enduml
```

