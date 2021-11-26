# TelegramPlane


```text
fontawesome-5/Brands/TelegramPlane
```

```text
include('fontawesome-5/Brands/TelegramPlane')
```



| Illustration | TelegramPlane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/TelegramPlane.png) | ![illustration for TelegramPlane](../../fontawesome-5/Brands/TelegramPlane.Local.png) |




## TelegramPlane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TelegramPlane
include('fontawesome-5/Brands/TelegramPlane')

' renders the element
TelegramPlane('TelegramPlane', 'Telegram Plane', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TelegramPlane
include('fontawesome-5/Brands/TelegramPlane')

' renders the element
TelegramPlane('TelegramPlane', 'Telegram Plane', 'an optional tech label')
@enduml
```

