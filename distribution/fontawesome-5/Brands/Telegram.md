# Telegram


```text
fontawesome-5/Brands/Telegram
```

```text
include('fontawesome-5/Brands/Telegram')
```



| Illustration | Telegram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Telegram.png) | ![illustration for Telegram](../../fontawesome-5/Brands/Telegram.Local.png) |




## Telegram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Telegram
include('fontawesome-5/Brands/Telegram')

' renders the element
Telegram('Telegram', 'Telegram', 'an optional tech label')
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

' loads the Item which embeds the element Telegram
include('fontawesome-5/Brands/Telegram')

' renders the element
Telegram('Telegram', 'Telegram', 'an optional tech label')
@enduml
```

