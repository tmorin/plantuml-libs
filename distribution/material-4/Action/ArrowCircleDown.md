# ArrowCircleDown


```text
material-4/Action/ArrowCircleDown
```

```text
include('material-4/Action/ArrowCircleDown')
```



| Illustration | ArrowCircleDown |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ArrowCircleDown.png) | ![illustration for ArrowCircleDown](../../material-4/Action/ArrowCircleDown.Local.png) |




## ArrowCircleDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ArrowCircleDown
include('material-4/Action/ArrowCircleDown')

' renders the element
ArrowCircleDown('ArrowCircleDown', 'Arrow Circle Down', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element ArrowCircleDown
include('material-4/Action/ArrowCircleDown')

' renders the element
ArrowCircleDown('ArrowCircleDown', 'Arrow Circle Down', 'an optional tech label', 'an optional description')
@enduml
```

