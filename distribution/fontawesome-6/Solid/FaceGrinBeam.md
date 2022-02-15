# FaceGrinBeam


```text
fontawesome-6/Solid/FaceGrinBeam
```

```text
include('fontawesome-6/Solid/FaceGrinBeam')
```



| Illustration | FaceGrinBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceGrinBeam.png) | ![illustration for FaceGrinBeam](../../fontawesome-6/Solid/FaceGrinBeam.Local.png) |




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
include('fontawesome-6/Solid/FaceGrinBeam')

' renders the element
FaceGrinBeam('FaceGrinBeam', 'Face Grin Beam', 'an optional tech label')
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
include('fontawesome-6/Solid/FaceGrinBeam')

' renders the element
FaceGrinBeam('FaceGrinBeam', 'Face Grin Beam', 'an optional tech label')
@enduml
```

