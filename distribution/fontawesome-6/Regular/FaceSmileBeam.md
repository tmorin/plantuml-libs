# FaceSmileBeam


```text
fontawesome-6/Regular/FaceSmileBeam
```

```text
include('fontawesome-6/Regular/FaceSmileBeam')
```



| Illustration | FaceSmileBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceSmileBeam.png) | ![illustration for FaceSmileBeam](../../fontawesome-6/Regular/FaceSmileBeam.Local.png) |




## FaceSmileBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceSmileBeam
include('fontawesome-6/Regular/FaceSmileBeam')

' renders the element
FaceSmileBeam('FaceSmileBeam', 'Face Smile Beam', 'an optional tech label')
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

' loads the Item which embeds the element FaceSmileBeam
include('fontawesome-6/Regular/FaceSmileBeam')

' renders the element
FaceSmileBeam('FaceSmileBeam', 'Face Smile Beam', 'an optional tech label')
@enduml
```

