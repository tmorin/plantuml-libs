# FaceGrinTongueWink


```text
fontawesome/Regular/FaceGrinTongueWink
```

```text
include('fontawesome/Regular/FaceGrinTongueWink')
```



| Illustration | FaceGrinTongueWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceGrinTongueWink.png) | ![illustration for FaceGrinTongueWink](../../fontawesome/Regular/FaceGrinTongueWink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrinTongueWinkXs>`
- `<$FaceGrinTongueWinkSm>`
- `<$FaceGrinTongueWinkMd>`
- `<$FaceGrinTongueWinkLg>`





## FaceGrinTongueWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrinTongueWink
include('fontawesome/Regular/FaceGrinTongueWink')

' renders the element
FaceGrinTongueWink('FaceGrinTongueWink', 'Face Grin Tongue Wink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinTongueWink
include('fontawesome/Regular/FaceGrinTongueWink')

' renders the element
FaceGrinTongueWink('FaceGrinTongueWink', 'Face Grin Tongue Wink', 'an optional tech label', 'an optional description')
@enduml
```

