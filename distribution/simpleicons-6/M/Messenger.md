# Messenger


```text
simpleicons-6/M/Messenger
```

```text
include('simpleicons-6/M/Messenger')
```



| Illustration | Messenger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Messenger.png) | ![illustration for Messenger](../../simpleicons-6/M/Messenger.Local.png) |




## Messenger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Messenger
include('simpleicons-6/M/Messenger')

' renders the element
Messenger('Messenger', 'Messenger', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Messenger
include('simpleicons-6/M/Messenger')

' renders the element
Messenger('Messenger', 'Messenger', 'an optional tech label')
@enduml
```

