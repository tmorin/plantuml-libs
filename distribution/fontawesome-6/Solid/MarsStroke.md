# MarsStroke


```text
fontawesome-6/Solid/MarsStroke
```

```text
include('fontawesome-6/Solid/MarsStroke')
```



| Illustration | MarsStroke |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MarsStroke.png) | ![illustration for MarsStroke](../../fontawesome-6/Solid/MarsStroke.Local.png) |




## MarsStroke

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MarsStroke
include('fontawesome-6/Solid/MarsStroke')

' renders the element
MarsStroke('MarsStroke', 'Mars Stroke', 'an optional tech label')
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

' loads the Item which embeds the element MarsStroke
include('fontawesome-6/Solid/MarsStroke')

' renders the element
MarsStroke('MarsStroke', 'Mars Stroke', 'an optional tech label')
@enduml
```

