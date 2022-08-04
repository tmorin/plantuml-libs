# ArrowCircleUp


```text
material-4/Action/ArrowCircleUp
```

```text
include('material-4/Action/ArrowCircleUp')
```



| Illustration | ArrowCircleUp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ArrowCircleUp.png) | ![illustration for ArrowCircleUp](../../material-4/Action/ArrowCircleUp.Local.png) |




## ArrowCircleUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ArrowCircleUp
include('material-4/Action/ArrowCircleUp')

' renders the element
ArrowCircleUp('ArrowCircleUp', 'Arrow Circle Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowCircleUp
include('material-4/Action/ArrowCircleUp')

' renders the element
ArrowCircleUp('ArrowCircleUp', 'Arrow Circle Up', 'an optional tech label', 'an optional description')
@enduml
```

