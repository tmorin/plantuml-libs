# Telegram


```text
fontawesome-6/Brands/Telegram
```

```text
include('fontawesome-6/Brands/Telegram')
```



| Illustration | Telegram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Telegram.png) | ![illustration for Telegram](../../fontawesome-6/Brands/Telegram.Local.png) |




## Telegram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Telegram
include('fontawesome-6/Brands/Telegram')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Telegram
include('fontawesome-6/Brands/Telegram')

' renders the element
Telegram('Telegram', 'Telegram', 'an optional tech label')
@enduml
```

