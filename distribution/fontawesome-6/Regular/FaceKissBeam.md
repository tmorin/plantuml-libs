# FaceKissBeam


```text
fontawesome-6/Regular/FaceKissBeam
```

```text
include('fontawesome-6/Regular/FaceKissBeam')
```



| Illustration | FaceKissBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceKissBeam.png) | ![illustration for FaceKissBeam](../../fontawesome-6/Regular/FaceKissBeam.Local.png) |




## FaceKissBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceKissBeam
include('fontawesome-6/Regular/FaceKissBeam')

' renders the element
FaceKissBeam('FaceKissBeam', 'Face Kiss Beam', 'an optional tech label')
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

' loads the Item which embeds the element FaceKissBeam
include('fontawesome-6/Regular/FaceKissBeam')

' renders the element
FaceKissBeam('FaceKissBeam', 'Face Kiss Beam', 'an optional tech label')
@enduml
```

