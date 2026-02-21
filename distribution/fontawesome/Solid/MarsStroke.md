# MarsStroke


```text
fontawesome/Solid/MarsStroke
```

```text
include('fontawesome/Solid/MarsStroke')
```



| Illustration | MarsStroke |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MarsStroke.png) | ![illustration for MarsStroke](../../fontawesome/Solid/MarsStroke.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarsStrokeXs>`
- `<$MarsStrokeSm>`
- `<$MarsStrokeMd>`
- `<$MarsStrokeLg>`





## MarsStroke

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MarsStroke
include('fontawesome/Solid/MarsStroke')

' renders the element
MarsStroke('MarsStroke', 'Mars Stroke', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MarsStroke
include('fontawesome/Solid/MarsStroke')

' renders the element
MarsStroke('MarsStroke', 'Mars Stroke', 'an optional tech label', 'an optional description')
@enduml
```

