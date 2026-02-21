# RulerHorizontal


```text
fontawesome/Solid/RulerHorizontal
```

```text
include('fontawesome/Solid/RulerHorizontal')
```



| Illustration | RulerHorizontal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RulerHorizontal.png) | ![illustration for RulerHorizontal](../../fontawesome/Solid/RulerHorizontal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RulerHorizontalXs>`
- `<$RulerHorizontalSm>`
- `<$RulerHorizontalMd>`
- `<$RulerHorizontalLg>`





## RulerHorizontal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RulerHorizontal
include('fontawesome/Solid/RulerHorizontal')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element RulerHorizontal
include('fontawesome/Solid/RulerHorizontal')

' renders the element
RulerHorizontal('RulerHorizontal', 'Ruler Horizontal', 'an optional tech label', 'an optional description')
@enduml
```

