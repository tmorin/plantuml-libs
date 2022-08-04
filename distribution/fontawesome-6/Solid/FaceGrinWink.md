# FaceGrinWink


```text
fontawesome-6/Solid/FaceGrinWink
```

```text
include('fontawesome-6/Solid/FaceGrinWink')
```



| Illustration | FaceGrinWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceGrinWink.png) | ![illustration for FaceGrinWink](../../fontawesome-6/Solid/FaceGrinWink.Local.png) |




## FaceGrinWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinWink
include('fontawesome-6/Solid/FaceGrinWink')

' renders the element
FaceGrinWink('FaceGrinWink', 'Face Grin Wink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinWink
include('fontawesome-6/Solid/FaceGrinWink')

' renders the element
FaceGrinWink('FaceGrinWink', 'Face Grin Wink', 'an optional tech label', 'an optional description')
@enduml
```

