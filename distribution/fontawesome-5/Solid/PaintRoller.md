# PaintRoller


```text
fontawesome-5/Solid/PaintRoller
```

```text
include('fontawesome-5/Solid/PaintRoller')
```



| Illustration | PaintRoller |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PaintRoller.png) | ![illustration for PaintRoller](../../fontawesome-5/Solid/PaintRoller.Local.png) |




## PaintRoller

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PaintRoller
include('fontawesome-5/Solid/PaintRoller')

' renders the element
PaintRoller('PaintRoller', 'Paint Roller', 'an optional tech label')
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

' loads the Item which embeds the element PaintRoller
include('fontawesome-5/Solid/PaintRoller')

' renders the element
PaintRoller('PaintRoller', 'Paint Roller', 'an optional tech label')
@enduml
```

