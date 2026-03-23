# PencilRuler


```text
fontawesome/Solid/PencilRuler
```

```text
include('fontawesome/Solid/PencilRuler')
```



| Illustration | PencilRuler |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PencilRuler.png) | ![illustration for PencilRuler](../../fontawesome/Solid/PencilRuler.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PencilRulerXs>`
- `<$PencilRulerSm>`
- `<$PencilRulerMd>`
- `<$PencilRulerLg>`





## PencilRuler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PencilRuler
include('fontawesome/Solid/PencilRuler')

' renders the element
PencilRuler('PencilRuler', 'Pencil Ruler', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PencilRuler
include('fontawesome/Solid/PencilRuler')

' renders the element
PencilRuler('PencilRuler', 'Pencil Ruler', 'an optional tech label', 'an optional description')
@enduml
```

