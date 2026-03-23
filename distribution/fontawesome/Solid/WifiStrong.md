# WifiStrong


```text
fontawesome/Solid/WifiStrong
```

```text
include('fontawesome/Solid/WifiStrong')
```



| Illustration | WifiStrong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WifiStrong.png) | ![illustration for WifiStrong](../../fontawesome/Solid/WifiStrong.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WifiStrongXs>`
- `<$WifiStrongSm>`
- `<$WifiStrongMd>`
- `<$WifiStrongLg>`





## WifiStrong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WifiStrong
include('fontawesome/Solid/WifiStrong')

' renders the element
WifiStrong('WifiStrong', 'Wifi Strong', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WifiStrong
include('fontawesome/Solid/WifiStrong')

' renders the element
WifiStrong('WifiStrong', 'Wifi Strong', 'an optional tech label', 'an optional description')
@enduml
```

