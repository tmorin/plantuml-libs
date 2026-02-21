# FaceLaughBeam


```text
fontawesome/Solid/FaceLaughBeam
```

```text
include('fontawesome/Solid/FaceLaughBeam')
```



| Illustration | FaceLaughBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceLaughBeam.png) | ![illustration for FaceLaughBeam](../../fontawesome/Solid/FaceLaughBeam.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceLaughBeamXs>`
- `<$FaceLaughBeamSm>`
- `<$FaceLaughBeamMd>`
- `<$FaceLaughBeamLg>`





## FaceLaughBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceLaughBeam
include('fontawesome/Solid/FaceLaughBeam')

' renders the element
FaceLaughBeam('FaceLaughBeam', 'Face Laugh Beam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceLaughBeam
include('fontawesome/Solid/FaceLaughBeam')

' renders the element
FaceLaughBeam('FaceLaughBeam', 'Face Laugh Beam', 'an optional tech label', 'an optional description')
@enduml
```

