# Messenger


```text
simpleicons/M/Messenger
```

```text
include('simpleicons/M/Messenger')
```



| Illustration | Messenger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Messenger.png) | ![illustration for Messenger](../../simpleicons/M/Messenger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessengerXs>`
- `<$MessengerSm>`
- `<$MessengerMd>`
- `<$MessengerLg>`





## Messenger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Messenger
include('simpleicons/M/Messenger')

' renders the element
Messenger('Messenger', 'Messenger', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Messenger
include('simpleicons/M/Messenger')

' renders the element
Messenger('Messenger', 'Messenger', 'an optional tech label', 'an optional description')
@enduml
```

