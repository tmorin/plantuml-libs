# ArrowsSpin


```text
fontawesome-6/Solid/ArrowsSpin
```

```text
include('fontawesome-6/Solid/ArrowsSpin')
```



| Illustration | ArrowsSpin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowsSpin.png) | ![illustration for ArrowsSpin](../../fontawesome-6/Solid/ArrowsSpin.Local.png) |




## ArrowsSpin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowsSpin
include('fontawesome-6/Solid/ArrowsSpin')

' renders the element
ArrowsSpin('ArrowsSpin', 'Arrows Spin', 'an optional tech label')
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

' loads the Item which embeds the element ArrowsSpin
include('fontawesome-6/Solid/ArrowsSpin')

' renders the element
ArrowsSpin('ArrowsSpin', 'Arrows Spin', 'an optional tech label')
@enduml
```

