# Pusher


```text
simpleicons-7/P/Pusher
```

```text
include('simpleicons-7/P/Pusher')
```



| Illustration | Pusher |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pusher.png) | ![illustration for Pusher](../../simpleicons-7/P/Pusher.Local.png) |




## Pusher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pusher
include('simpleicons-7/P/Pusher')

' renders the element
Pusher('Pusher', 'Pusher', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pusher
include('simpleicons-7/P/Pusher')

' renders the element
Pusher('Pusher', 'Pusher', 'an optional tech label', 'an optional description')
@enduml
```

