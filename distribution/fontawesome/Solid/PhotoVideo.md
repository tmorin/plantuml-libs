# PhotoVideo


```text
fontawesome/Solid/PhotoVideo
```

```text
include('fontawesome/Solid/PhotoVideo')
```



| Illustration | PhotoVideo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PhotoVideo.png) | ![illustration for PhotoVideo](../../fontawesome/Solid/PhotoVideo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhotoVideoXs>`
- `<$PhotoVideoSm>`
- `<$PhotoVideoMd>`
- `<$PhotoVideoLg>`





## PhotoVideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PhotoVideo
include('fontawesome/Solid/PhotoVideo')

' renders the element
PhotoVideo('PhotoVideo', 'Photo Video', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhotoVideo
include('fontawesome/Solid/PhotoVideo')

' renders the element
PhotoVideo('PhotoVideo', 'Photo Video', 'an optional tech label', 'an optional description')
@enduml
```

