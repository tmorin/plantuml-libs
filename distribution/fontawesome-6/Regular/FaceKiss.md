# FaceKiss


```text
fontawesome-6/Regular/FaceKiss
```

```text
include('fontawesome-6/Regular/FaceKiss')
```



| Illustration | FaceKiss |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceKiss.png) | ![illustration for FaceKiss](../../fontawesome-6/Regular/FaceKiss.Local.png) |




## FaceKiss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceKiss
include('fontawesome-6/Regular/FaceKiss')

' renders the element
FaceKiss('FaceKiss', 'Face Kiss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceKiss
include('fontawesome-6/Regular/FaceKiss')

' renders the element
FaceKiss('FaceKiss', 'Face Kiss', 'an optional tech label', 'an optional description')
@enduml
```

