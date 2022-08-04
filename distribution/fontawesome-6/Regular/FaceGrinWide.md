# FaceGrinWide


```text
fontawesome-6/Regular/FaceGrinWide
```

```text
include('fontawesome-6/Regular/FaceGrinWide')
```



| Illustration | FaceGrinWide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceGrinWide.png) | ![illustration for FaceGrinWide](../../fontawesome-6/Regular/FaceGrinWide.Local.png) |




## FaceGrinWide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinWide
include('fontawesome-6/Regular/FaceGrinWide')

' renders the element
FaceGrinWide('FaceGrinWide', 'Face Grin Wide', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinWide
include('fontawesome-6/Regular/FaceGrinWide')

' renders the element
FaceGrinWide('FaceGrinWide', 'Face Grin Wide', 'an optional tech label', 'an optional description')
@enduml
```

