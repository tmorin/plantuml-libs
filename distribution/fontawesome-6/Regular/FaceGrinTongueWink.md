# FaceGrinTongueWink


```text
fontawesome-6/Regular/FaceGrinTongueWink
```

```text
include('fontawesome-6/Regular/FaceGrinTongueWink')
```



| Illustration | FaceGrinTongueWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceGrinTongueWink.png) | ![illustration for FaceGrinTongueWink](../../fontawesome-6/Regular/FaceGrinTongueWink.Local.png) |




## FaceGrinTongueWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinTongueWink
include('fontawesome-6/Regular/FaceGrinTongueWink')

' renders the element
FaceGrinTongueWink('FaceGrinTongueWink', 'Face Grin Tongue Wink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinTongueWink
include('fontawesome-6/Regular/FaceGrinTongueWink')

' renders the element
FaceGrinTongueWink('FaceGrinTongueWink', 'Face Grin Tongue Wink', 'an optional tech label', 'an optional description')
@enduml
```

