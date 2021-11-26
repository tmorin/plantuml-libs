# Telegram


```text
simpleicons-5/T/Telegram
```

```text
include('simpleicons-5/T/Telegram')
```



| Illustration | Telegram |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Telegram.png) | ![illustration for Telegram](../../simpleicons-5/T/Telegram.Local.png) |




## Telegram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Telegram
include('simpleicons-5/T/Telegram')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Telegram
include('simpleicons-5/T/Telegram')

' renders the element
Telegram('Telegram', 'Telegram', 'an optional tech label')
@enduml
```

