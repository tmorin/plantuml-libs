# PersonalVideo


```text
material/Notification/PersonalVideo
```

```text
include('material/Notification/PersonalVideo')
```



| Illustration | PersonalVideo |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/PersonalVideo.png) | ![illustration for PersonalVideo](../../material/Notification/PersonalVideo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonalVideoXs>`
- `<$PersonalVideoSm>`
- `<$PersonalVideoMd>`
- `<$PersonalVideoLg>`





## PersonalVideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PersonalVideo
include('material/Notification/PersonalVideo')

' renders the element
PersonalVideo('PersonalVideo', 'Personal Video', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element PersonalVideo
include('material/Notification/PersonalVideo')

' renders the element
PersonalVideo('PersonalVideo', 'Personal Video', 'an optional tech label', 'an optional description')
@enduml
```

