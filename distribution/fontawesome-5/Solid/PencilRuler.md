# PencilRuler


```text
fontawesome-5/Solid/PencilRuler
```

```text
include('fontawesome-5/Solid/PencilRuler')
```



| Illustration | PencilRuler |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PencilRuler.png) | ![illustration for PencilRuler](../../fontawesome-5/Solid/PencilRuler.Local.png) |




## PencilRuler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PencilRuler
include('fontawesome-5/Solid/PencilRuler')

' renders the element
PencilRuler('PencilRuler', 'Pencil Ruler', 'an optional tech label')
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

' loads the Item which embeds the element PencilRuler
include('fontawesome-5/Solid/PencilRuler')

' renders the element
PencilRuler('PencilRuler', 'Pencil Ruler', 'an optional tech label')
@enduml
```

