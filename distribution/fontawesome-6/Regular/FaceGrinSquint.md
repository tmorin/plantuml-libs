# FaceGrinSquint


```text
fontawesome-6/Regular/FaceGrinSquint
```

```text
include('fontawesome-6/Regular/FaceGrinSquint')
```



| Illustration | FaceGrinSquint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceGrinSquint.png) | ![illustration for FaceGrinSquint](../../fontawesome-6/Regular/FaceGrinSquint.Local.png) |




## FaceGrinSquint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceGrinSquint
include('fontawesome-6/Regular/FaceGrinSquint')

' renders the element
FaceGrinSquint('FaceGrinSquint', 'Face Grin Squint', 'an optional tech label')
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

' loads the Item which embeds the element FaceGrinSquint
include('fontawesome-6/Regular/FaceGrinSquint')

' renders the element
FaceGrinSquint('FaceGrinSquint', 'Face Grin Squint', 'an optional tech label')
@enduml
```

