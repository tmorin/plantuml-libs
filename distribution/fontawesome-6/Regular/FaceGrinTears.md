# FaceGrinTears


```text
fontawesome-6/Regular/FaceGrinTears
```

```text
include('fontawesome-6/Regular/FaceGrinTears')
```



| Illustration | FaceGrinTears |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceGrinTears.png) | ![illustration for FaceGrinTears](../../fontawesome-6/Regular/FaceGrinTears.Local.png) |




## FaceGrinTears

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinTears
include('fontawesome-6/Regular/FaceGrinTears')

' renders the element
FaceGrinTears('FaceGrinTears', 'Face Grin Tears', 'an optional tech label')
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

' loads the Item which embeds the element FaceGrinTears
include('fontawesome-6/Regular/FaceGrinTears')

' renders the element
FaceGrinTears('FaceGrinTears', 'Face Grin Tears', 'an optional tech label')
@enduml
```

