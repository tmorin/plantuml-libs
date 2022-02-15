# FaceAngry


```text
fontawesome-6/Regular/FaceAngry
```

```text
include('fontawesome-6/Regular/FaceAngry')
```



| Illustration | FaceAngry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceAngry.png) | ![illustration for FaceAngry](../../fontawesome-6/Regular/FaceAngry.Local.png) |




## FaceAngry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceAngry
include('fontawesome-6/Regular/FaceAngry')

' renders the element
FaceAngry('FaceAngry', 'Face Angry', 'an optional tech label')
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

' loads the Item which embeds the element FaceAngry
include('fontawesome-6/Regular/FaceAngry')

' renders the element
FaceAngry('FaceAngry', 'Face Angry', 'an optional tech label')
@enduml
```

