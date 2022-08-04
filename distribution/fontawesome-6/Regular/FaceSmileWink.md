# FaceSmileWink


```text
fontawesome-6/Regular/FaceSmileWink
```

```text
include('fontawesome-6/Regular/FaceSmileWink')
```



| Illustration | FaceSmileWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceSmileWink.png) | ![illustration for FaceSmileWink](../../fontawesome-6/Regular/FaceSmileWink.Local.png) |




## FaceSmileWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceSmileWink
include('fontawesome-6/Regular/FaceSmileWink')

' renders the element
FaceSmileWink('FaceSmileWink', 'Face Smile Wink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceSmileWink
include('fontawesome-6/Regular/FaceSmileWink')

' renders the element
FaceSmileWink('FaceSmileWink', 'Face Smile Wink', 'an optional tech label', 'an optional description')
@enduml
```

