# PhonePaused


```text
material/Notification/PhonePaused
```

```text
include('material/Notification/PhonePaused')
```



| Illustration | PhonePaused |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/PhonePaused.png) | ![illustration for PhonePaused](../../material/Notification/PhonePaused.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhonePausedXs>`
- `<$PhonePausedSm>`
- `<$PhonePausedMd>`
- `<$PhonePausedLg>`





## PhonePaused

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhonePaused
include('material/Notification/PhonePaused')

' renders the element
PhonePaused('PhonePaused', 'Phone Paused', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhonePaused
include('material/Notification/PhonePaused')

' renders the element
PhonePaused('PhonePaused', 'Phone Paused', 'an optional tech label', 'an optional description')
@enduml
```

