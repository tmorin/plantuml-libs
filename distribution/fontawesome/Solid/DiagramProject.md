# DiagramProject


```text
fontawesome/Solid/DiagramProject
```

```text
include('fontawesome/Solid/DiagramProject')
```



| Illustration | DiagramProject |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DiagramProject.png) | ![illustration for DiagramProject](../../fontawesome/Solid/DiagramProject.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiagramProjectXs>`
- `<$DiagramProjectSm>`
- `<$DiagramProjectMd>`
- `<$DiagramProjectLg>`





## DiagramProject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DiagramProject
include('fontawesome/Solid/DiagramProject')

' renders the element
DiagramProject('DiagramProject', 'Diagram Project', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DiagramProject
include('fontawesome/Solid/DiagramProject')

' renders the element
DiagramProject('DiagramProject', 'Diagram Project', 'an optional tech label', 'an optional description')
@enduml
```

