# PenRuler


```text
fontawesome/Solid/PenRuler
```

```text
include('fontawesome/Solid/PenRuler')
```



| Illustration | PenRuler |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PenRuler.png) | ![illustration for PenRuler](../../fontawesome/Solid/PenRuler.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PenRulerXs>`
- `<$PenRulerSm>`
- `<$PenRulerMd>`
- `<$PenRulerLg>`





## PenRuler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PenRuler
include('fontawesome/Solid/PenRuler')

' renders the element
PenRuler('PenRuler', 'Pen Ruler', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PenRuler
include('fontawesome/Solid/PenRuler')

' renders the element
PenRuler('PenRuler', 'Pen Ruler', 'an optional tech label', 'an optional description')
@enduml
```

