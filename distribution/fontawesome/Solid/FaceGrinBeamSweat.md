# FaceGrinBeamSweat


```text
fontawesome/Solid/FaceGrinBeamSweat
```

```text
include('fontawesome/Solid/FaceGrinBeamSweat')
```



| Illustration | FaceGrinBeamSweat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceGrinBeamSweat.png) | ![illustration for FaceGrinBeamSweat](../../fontawesome/Solid/FaceGrinBeamSweat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrinBeamSweatXs>`
- `<$FaceGrinBeamSweatSm>`
- `<$FaceGrinBeamSweatMd>`
- `<$FaceGrinBeamSweatLg>`





## FaceGrinBeamSweat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrinBeamSweat
include('fontawesome/Solid/FaceGrinBeamSweat')

' renders the element
FaceGrinBeamSweat('FaceGrinBeamSweat', 'Face Grin Beam Sweat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinBeamSweat
include('fontawesome/Solid/FaceGrinBeamSweat')

' renders the element
FaceGrinBeamSweat('FaceGrinBeamSweat', 'Face Grin Beam Sweat', 'an optional tech label', 'an optional description')
@enduml
```

