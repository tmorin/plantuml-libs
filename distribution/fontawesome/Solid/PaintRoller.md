# PaintRoller


```text
fontawesome/Solid/PaintRoller
```

```text
include('fontawesome/Solid/PaintRoller')
```



| Illustration | PaintRoller |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PaintRoller.png) | ![illustration for PaintRoller](../../fontawesome/Solid/PaintRoller.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaintRollerXs>`
- `<$PaintRollerSm>`
- `<$PaintRollerMd>`
- `<$PaintRollerLg>`





## PaintRoller

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PaintRoller
include('fontawesome/Solid/PaintRoller')

' renders the element
PaintRoller('PaintRoller', 'Paint Roller', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PaintRoller
include('fontawesome/Solid/PaintRoller')

' renders the element
PaintRoller('PaintRoller', 'Paint Roller', 'an optional tech label', 'an optional description')
@enduml
```

