# FaceGrinBeam


```text
fontawesome-6/Regular/FaceGrinBeam
```

```text
include('fontawesome-6/Regular/FaceGrinBeam')
```



| Illustration | FaceGrinBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceGrinBeam.png) | ![illustration for FaceGrinBeam](../../fontawesome-6/Regular/FaceGrinBeam.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinBeam
include('fontawesome-6/Regular/FaceGrinBeam')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinBeam
include('fontawesome-6/Regular/FaceGrinBeam')

' renders the element
FaceGrinBeam('FaceGrinBeam', 'Face Grin Beam', 'an optional tech label', 'an optional description')
@enduml
```

