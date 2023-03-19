# SwitchVideo


```text
material-4/Image/SwitchVideo
```

```text
include('material-4/Image/SwitchVideo')
```



| Illustration | SwitchVideo |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/SwitchVideo.png) | ![illustration for SwitchVideo](../../material-4/Image/SwitchVideo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwitchVideoXs>`
- `<$SwitchVideoSm>`
- `<$SwitchVideoMd>`
- `<$SwitchVideoLg>`





## SwitchVideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SwitchVideo
include('material-4/Image/SwitchVideo')

' renders the element
SwitchVideo('SwitchVideo', 'Switch Video', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element SwitchVideo
include('material-4/Image/SwitchVideo')

' renders the element
SwitchVideo('SwitchVideo', 'Switch Video', 'an optional tech label', 'an optional description')
@enduml
```

