# PenAlt


```text
fontawesome-5/Solid/PenAlt
```

```text
include('fontawesome-5/Solid/PenAlt')
```



| Illustration | PenAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PenAlt.png) | ![illustration for PenAlt](../../fontawesome-5/Solid/PenAlt.Local.png) |




## PenAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PenAlt
include('fontawesome-5/Solid/PenAlt')

' renders the element
PenAlt('PenAlt', 'Pen Alt', 'an optional tech label')
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

' loads the Item which embeds the element PenAlt
include('fontawesome-5/Solid/PenAlt')

' renders the element
PenAlt('PenAlt', 'Pen Alt', 'an optional tech label')
@enduml
```

