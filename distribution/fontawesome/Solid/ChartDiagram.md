# ChartDiagram


```text
fontawesome/Solid/ChartDiagram
```

```text
include('fontawesome/Solid/ChartDiagram')
```



| Illustration | ChartDiagram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChartDiagram.png) | ![illustration for ChartDiagram](../../fontawesome/Solid/ChartDiagram.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChartDiagramXs>`
- `<$ChartDiagramSm>`
- `<$ChartDiagramMd>`
- `<$ChartDiagramLg>`





## ChartDiagram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChartDiagram
include('fontawesome/Solid/ChartDiagram')

' renders the element
ChartDiagram('ChartDiagram', 'Chart Diagram', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChartDiagram
include('fontawesome/Solid/ChartDiagram')

' renders the element
ChartDiagram('ChartDiagram', 'Chart Diagram', 'an optional tech label', 'an optional description')
@enduml
```

