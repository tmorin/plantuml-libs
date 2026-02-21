# FaceKissBeam


```text
fontawesome/Regular/FaceKissBeam
```

```text
include('fontawesome/Regular/FaceKissBeam')
```



| Illustration | FaceKissBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceKissBeam.png) | ![illustration for FaceKissBeam](../../fontawesome/Regular/FaceKissBeam.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceKissBeamXs>`
- `<$FaceKissBeamSm>`
- `<$FaceKissBeamMd>`
- `<$FaceKissBeamLg>`





## FaceKissBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceKissBeam
include('fontawesome/Regular/FaceKissBeam')

' renders the element
FaceKissBeam('FaceKissBeam', 'Face Kiss Beam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceKissBeam
include('fontawesome/Regular/FaceKissBeam')

' renders the element
FaceKissBeam('FaceKissBeam', 'Face Kiss Beam', 'an optional tech label', 'an optional description')
@enduml
```

