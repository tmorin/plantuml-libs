# Wifi


```text
material/Notification/Wifi
```

```text
include('material/Notification/Wifi')
```



| Illustration | Wifi |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/Wifi.png) | ![illustration for Wifi](../../material/Notification/Wifi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WifiXs>`
- `<$WifiSm>`
- `<$WifiMd>`
- `<$WifiLg>`





## Wifi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Wifi
include('material/Notification/Wifi')

' renders the element
Wifi('Wifi', 'Wifi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wifi
include('material/Notification/Wifi')

' renders the element
Wifi('Wifi', 'Wifi', 'an optional tech label', 'an optional description')
@enduml
```

