# KissBeam


```text
fontawesome/Solid/KissBeam
```

```text
include('fontawesome/Solid/KissBeam')
```



| Illustration | KissBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/KissBeam.png) | ![illustration for KissBeam](../../fontawesome/Solid/KissBeam.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KissBeamXs>`
- `<$KissBeamSm>`
- `<$KissBeamMd>`
- `<$KissBeamLg>`





## KissBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element KissBeam
include('fontawesome/Solid/KissBeam')

' renders the element
KissBeam('KissBeam', 'Kiss Beam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KissBeam
include('fontawesome/Solid/KissBeam')

' renders the element
KissBeam('KissBeam', 'Kiss Beam', 'an optional tech label', 'an optional description')
@enduml
```

