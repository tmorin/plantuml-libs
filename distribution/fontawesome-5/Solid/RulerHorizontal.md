# RulerHorizontal


```text
fontawesome-5/Solid/RulerHorizontal
```

```text
include('fontawesome-5/Solid/RulerHorizontal')
```



| Illustration | RulerHorizontal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/RulerHorizontal.png) | ![illustration for RulerHorizontal](../../fontawesome-5/Solid/RulerHorizontal.Local.png) |




## RulerHorizontal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RulerHorizontal
include('fontawesome-5/Solid/RulerHorizontal')

' renders the element
RulerHorizontal('RulerHorizontal', 'Ruler Horizontal', 'an optional tech label')
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

' loads the Item which embeds the element RulerHorizontal
include('fontawesome-5/Solid/RulerHorizontal')

' renders the element
RulerHorizontal('RulerHorizontal', 'Ruler Horizontal', 'an optional tech label')
@enduml
```

