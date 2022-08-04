# FaceGrinBeamSweat


```text
fontawesome-6/Regular/FaceGrinBeamSweat
```

```text
include('fontawesome-6/Regular/FaceGrinBeamSweat')
```



| Illustration | FaceGrinBeamSweat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceGrinBeamSweat.png) | ![illustration for FaceGrinBeamSweat](../../fontawesome-6/Regular/FaceGrinBeamSweat.Local.png) |




## FaceGrinBeamSweat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinBeamSweat
include('fontawesome-6/Regular/FaceGrinBeamSweat')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinBeamSweat
include('fontawesome-6/Regular/FaceGrinBeamSweat')

' renders the element
FaceGrinBeamSweat('FaceGrinBeamSweat', 'Face Grin Beam Sweat', 'an optional tech label', 'an optional description')
@enduml
```

