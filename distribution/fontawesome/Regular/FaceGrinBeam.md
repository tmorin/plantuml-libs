# FaceGrinBeam


```text
fontawesome/Regular/FaceGrinBeam
```

```text
include('fontawesome/Regular/FaceGrinBeam')
```



| Illustration | FaceGrinBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceGrinBeam.png) | ![illustration for FaceGrinBeam](../../fontawesome/Regular/FaceGrinBeam.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrinBeamXs>`
- `<$FaceGrinBeamSm>`
- `<$FaceGrinBeamMd>`
- `<$FaceGrinBeamLg>`





## FaceGrinBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrinBeam
include('fontawesome/Regular/FaceGrinBeam')

' renders the element
FaceGrinBeam('FaceGrinBeam', 'Face Grin Beam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinBeam
include('fontawesome/Regular/FaceGrinBeam')

' renders the element
FaceGrinBeam('FaceGrinBeam', 'Face Grin Beam', 'an optional tech label', 'an optional description')
@enduml
```

