# KissBeam


```text
fontawesome-5/Solid/KissBeam
```

```text
include('fontawesome-5/Solid/KissBeam')
```



| Illustration | KissBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/KissBeam.png) | ![illustration for KissBeam](../../fontawesome-5/Solid/KissBeam.Local.png) |




## KissBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element KissBeam
include('fontawesome-5/Solid/KissBeam')

' renders the element
KissBeam('KissBeam', 'Kiss Beam', 'an optional tech label')
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

' loads the Item which embeds the element KissBeam
include('fontawesome-5/Solid/KissBeam')

' renders the element
KissBeam('KissBeam', 'Kiss Beam', 'an optional tech label')
@enduml
```

