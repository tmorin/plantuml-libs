# Wifi


```text
fontawesome/Solid/Wifi
```

```text
include('fontawesome/Solid/Wifi')
```



| Illustration | Wifi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Wifi.png) | ![illustration for Wifi](../../fontawesome/Solid/Wifi.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wifi
include('fontawesome/Solid/Wifi')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wifi
include('fontawesome/Solid/Wifi')

' renders the element
Wifi('Wifi', 'Wifi', 'an optional tech label', 'an optional description')
@enduml
```

