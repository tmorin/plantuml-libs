# TelegramPlane


```text
fontawesome/Brands/TelegramPlane
```

```text
include('fontawesome/Brands/TelegramPlane')
```



| Illustration | TelegramPlane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/TelegramPlane.png) | ![illustration for TelegramPlane](../../fontawesome/Brands/TelegramPlane.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TelegramPlaneXs>`
- `<$TelegramPlaneSm>`
- `<$TelegramPlaneMd>`
- `<$TelegramPlaneLg>`





## TelegramPlane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TelegramPlane
include('fontawesome/Brands/TelegramPlane')

' renders the element
TelegramPlane('TelegramPlane', 'Telegram Plane', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TelegramPlane
include('fontawesome/Brands/TelegramPlane')

' renders the element
TelegramPlane('TelegramPlane', 'Telegram Plane', 'an optional tech label', 'an optional description')
@enduml
```

