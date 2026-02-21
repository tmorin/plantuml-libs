# DiagramNext


```text
fontawesome/Solid/DiagramNext
```

```text
include('fontawesome/Solid/DiagramNext')
```



| Illustration | DiagramNext |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DiagramNext.png) | ![illustration for DiagramNext](../../fontawesome/Solid/DiagramNext.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiagramNextXs>`
- `<$DiagramNextSm>`
- `<$DiagramNextMd>`
- `<$DiagramNextLg>`





## DiagramNext

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DiagramNext
include('fontawesome/Solid/DiagramNext')

' renders the element
DiagramNext('DiagramNext', 'Diagram Next', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DiagramNext
include('fontawesome/Solid/DiagramNext')

' renders the element
DiagramNext('DiagramNext', 'Diagram Next', 'an optional tech label', 'an optional description')
@enduml
```

