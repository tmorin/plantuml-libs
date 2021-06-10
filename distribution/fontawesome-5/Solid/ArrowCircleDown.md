# ArrowCircleDown


```text
fontawesome-5/Solid/ArrowCircleDown
```

```text
include('fontawesome-5/Solid/ArrowCircleDown')
```



| Illustration | ArrowCircleDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ArrowCircleDown.png) | ![illustration for ArrowCircleDown](../../fontawesome-5/Solid/ArrowCircleDown.Local.png) |




## ArrowCircleDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowCircleDown
include('fontawesome-5/Solid/ArrowCircleDown')

' renders the element
ArrowCircleDown('ArrowCircleDown', 'Arrow Circle Down', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowCircleDown
include('fontawesome-5/Solid/ArrowCircleDown')

' renders the element
ArrowCircleDown('ArrowCircleDown', 'Arrow Circle Down', 'an optional tech label')
@enduml
```

