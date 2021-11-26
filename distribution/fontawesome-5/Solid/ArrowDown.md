# ArrowDown


```text
fontawesome-5/Solid/ArrowDown
```

```text
include('fontawesome-5/Solid/ArrowDown')
```



| Illustration | ArrowDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ArrowDown.png) | ![illustration for ArrowDown](../../fontawesome-5/Solid/ArrowDown.Local.png) |




## ArrowDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowDown
include('fontawesome-5/Solid/ArrowDown')

' renders the element
ArrowDown('ArrowDown', 'Arrow Down', 'an optional tech label')
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

' loads the Item which embeds the element ArrowDown
include('fontawesome-5/Solid/ArrowDown')

' renders the element
ArrowDown('ArrowDown', 'Arrow Down', 'an optional tech label')
@enduml
```

