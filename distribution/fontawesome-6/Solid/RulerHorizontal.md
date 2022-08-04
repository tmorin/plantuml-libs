# RulerHorizontal


```text
fontawesome-6/Solid/RulerHorizontal
```

```text
include('fontawesome-6/Solid/RulerHorizontal')
```



| Illustration | RulerHorizontal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RulerHorizontal.png) | ![illustration for RulerHorizontal](../../fontawesome-6/Solid/RulerHorizontal.Local.png) |




## RulerHorizontal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RulerHorizontal
include('fontawesome-6/Solid/RulerHorizontal')

' renders the element
RulerHorizontal('RulerHorizontal', 'Ruler Horizontal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RulerHorizontal
include('fontawesome-6/Solid/RulerHorizontal')

' renders the element
RulerHorizontal('RulerHorizontal', 'Ruler Horizontal', 'an optional tech label', 'an optional description')
@enduml
```

