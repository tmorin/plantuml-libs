# FaceGrinWink


```text
fontawesome/Regular/FaceGrinWink
```

```text
include('fontawesome/Regular/FaceGrinWink')
```



| Illustration | FaceGrinWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceGrinWink.png) | ![illustration for FaceGrinWink](../../fontawesome/Regular/FaceGrinWink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrinWinkXs>`
- `<$FaceGrinWinkSm>`
- `<$FaceGrinWinkMd>`
- `<$FaceGrinWinkLg>`





## FaceGrinWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrinWink
include('fontawesome/Regular/FaceGrinWink')

' renders the element
FaceGrinWink('FaceGrinWink', 'Face Grin Wink', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrinWink
include('fontawesome/Regular/FaceGrinWink')

' renders the element
FaceGrinWink('FaceGrinWink', 'Face Grin Wink', 'an optional tech label', 'an optional description')
@enduml
```

