# VideoCamera


```text
fontawesome/Solid/VideoCamera
```

```text
include('fontawesome/Solid/VideoCamera')
```



| Illustration | VideoCamera |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VideoCamera.png) | ![illustration for VideoCamera](../../fontawesome/Solid/VideoCamera.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VideoCameraXs>`
- `<$VideoCameraSm>`
- `<$VideoCameraMd>`
- `<$VideoCameraLg>`





## VideoCamera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VideoCamera
include('fontawesome/Solid/VideoCamera')

' renders the element
VideoCamera('VideoCamera', 'Video Camera', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VideoCamera
include('fontawesome/Solid/VideoCamera')

' renders the element
VideoCamera('VideoCamera', 'Video Camera', 'an optional tech label', 'an optional description')
@enduml
```

