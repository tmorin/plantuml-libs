# PaperPlane


```text
fontawesome/Regular/PaperPlane
```

```text
include('fontawesome/Regular/PaperPlane')
```



| Illustration | PaperPlane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/PaperPlane.png) | ![illustration for PaperPlane](../../fontawesome/Regular/PaperPlane.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaperPlaneXs>`
- `<$PaperPlaneSm>`
- `<$PaperPlaneMd>`
- `<$PaperPlaneLg>`





## PaperPlane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PaperPlane
include('fontawesome/Regular/PaperPlane')

' renders the element
PaperPlane('PaperPlane', 'Paper Plane', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PaperPlane
include('fontawesome/Regular/PaperPlane')

' renders the element
PaperPlane('PaperPlane', 'Paper Plane', 'an optional tech label', 'an optional description')
@enduml
```

