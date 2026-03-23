# ProjectDiagram


```text
fontawesome/Solid/ProjectDiagram
```

```text
include('fontawesome/Solid/ProjectDiagram')
```



| Illustration | ProjectDiagram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ProjectDiagram.png) | ![illustration for ProjectDiagram](../../fontawesome/Solid/ProjectDiagram.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProjectDiagramXs>`
- `<$ProjectDiagramSm>`
- `<$ProjectDiagramMd>`
- `<$ProjectDiagramLg>`





## ProjectDiagram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ProjectDiagram
include('fontawesome/Solid/ProjectDiagram')

' renders the element
ProjectDiagram('ProjectDiagram', 'Project Diagram', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ProjectDiagram
include('fontawesome/Solid/ProjectDiagram')

' renders the element
ProjectDiagram('ProjectDiagram', 'Project Diagram', 'an optional tech label', 'an optional description')
@enduml
```

