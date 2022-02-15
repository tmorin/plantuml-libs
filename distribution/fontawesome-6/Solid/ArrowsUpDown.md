# ArrowsUpDown


```text
fontawesome-6/Solid/ArrowsUpDown
```

```text
include('fontawesome-6/Solid/ArrowsUpDown')
```



| Illustration | ArrowsUpDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowsUpDown.png) | ![illustration for ArrowsUpDown](../../fontawesome-6/Solid/ArrowsUpDown.Local.png) |




## ArrowsUpDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowsUpDown
include('fontawesome-6/Solid/ArrowsUpDown')

' renders the element
ArrowsUpDown('ArrowsUpDown', 'Arrows Up Down', 'an optional tech label')
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

' loads the Item which embeds the element ArrowsUpDown
include('fontawesome-6/Solid/ArrowsUpDown')

' renders the element
ArrowsUpDown('ArrowsUpDown', 'Arrows Up Down', 'an optional tech label')
@enduml
```

