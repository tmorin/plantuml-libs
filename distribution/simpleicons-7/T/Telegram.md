# Telegram


```text
simpleicons-7/T/Telegram
```

```text
include('simpleicons-7/T/Telegram')
```



| Illustration | Telegram |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Telegram.png) | ![illustration for Telegram](../../simpleicons-7/T/Telegram.Local.png) |




## Telegram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Telegram
include('simpleicons-7/T/Telegram')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Telegram
include('simpleicons-7/T/Telegram')

' renders the element
Telegram('Telegram', 'Telegram', 'an optional tech label')
@enduml
```

