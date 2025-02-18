# Telegram


```text
simpleicons-14/T/Telegram
```

```text
include('simpleicons-14/T/Telegram')
```



| Illustration | Telegram |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Telegram.png) | ![illustration for Telegram](../../simpleicons-14/T/Telegram.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TelegramXs>`
- `<$TelegramSm>`
- `<$TelegramMd>`
- `<$TelegramLg>`





## Telegram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Telegram
include('simpleicons-14/T/Telegram')

' renders the element
Telegram('Telegram', 'Telegram', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Telegram
include('simpleicons-14/T/Telegram')

' renders the element
Telegram('Telegram', 'Telegram', 'an optional tech label', 'an optional description')
@enduml
```

