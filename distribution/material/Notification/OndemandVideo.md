# OndemandVideo


```text
material/Notification/OndemandVideo
```

```text
include('material/Notification/OndemandVideo')
```



| Illustration | OndemandVideo |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/OndemandVideo.png) | ![illustration for OndemandVideo](../../material/Notification/OndemandVideo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OndemandVideoXs>`
- `<$OndemandVideoSm>`
- `<$OndemandVideoMd>`
- `<$OndemandVideoLg>`





## OndemandVideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element OndemandVideo
include('material/Notification/OndemandVideo')

' renders the element
OndemandVideo('OndemandVideo', 'Ondemand Video', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element OndemandVideo
include('material/Notification/OndemandVideo')

' renders the element
OndemandVideo('OndemandVideo', 'Ondemand Video', 'an optional tech label', 'an optional description')
@enduml
```

