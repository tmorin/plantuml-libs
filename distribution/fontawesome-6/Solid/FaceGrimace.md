# FaceGrimace


```text
fontawesome-6/Solid/FaceGrimace
```

```text
include('fontawesome-6/Solid/FaceGrimace')
```



| Illustration | FaceGrimace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceGrimace.png) | ![illustration for FaceGrimace](../../fontawesome-6/Solid/FaceGrimace.Local.png) |




## FaceGrimace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrimace
include('fontawesome-6/Solid/FaceGrimace')

' renders the element
FaceGrimace('FaceGrimace', 'Face Grimace', 'an optional tech label')
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

' loads the Item which embeds the element FaceGrimace
include('fontawesome-6/Solid/FaceGrimace')

' renders the element
FaceGrimace('FaceGrimace', 'Face Grimace', 'an optional tech label')
@enduml
```

