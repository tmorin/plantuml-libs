# FaceGrinHearts


```text
fontawesome-6/Solid/FaceGrinHearts
```

```text
include('fontawesome-6/Solid/FaceGrinHearts')
```



| Illustration | FaceGrinHearts |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceGrinHearts.png) | ![illustration for FaceGrinHearts](../../fontawesome-6/Solid/FaceGrinHearts.Local.png) |




## FaceGrinHearts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinHearts
include('fontawesome-6/Solid/FaceGrinHearts')

' renders the element
FaceGrinHearts('FaceGrinHearts', 'Face Grin Hearts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinHearts
include('fontawesome-6/Solid/FaceGrinHearts')

' renders the element
FaceGrinHearts('FaceGrinHearts', 'Face Grin Hearts', 'an optional tech label', 'an optional description')
@enduml
```

