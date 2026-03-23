# GrinBeam


```text
fontawesome/Solid/GrinBeam
```

```text
include('fontawesome/Solid/GrinBeam')
```



| Illustration | GrinBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GrinBeam.png) | ![illustration for GrinBeam](../../fontawesome/Solid/GrinBeam.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinBeamXs>`
- `<$GrinBeamSm>`
- `<$GrinBeamMd>`
- `<$GrinBeamLg>`





## GrinBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinBeam
include('fontawesome/Solid/GrinBeam')

' renders the element
GrinBeam('GrinBeam', 'Grin Beam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinBeam
include('fontawesome/Solid/GrinBeam')

' renders the element
GrinBeam('GrinBeam', 'Grin Beam', 'an optional tech label', 'an optional description')
@enduml
```

