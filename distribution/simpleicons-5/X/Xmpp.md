# Xmpp


```text
simpleicons-5/X/Xmpp
```

```text
include('simpleicons-5/X/Xmpp')
```



| Illustration | Xmpp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/X/Xmpp.png) | ![illustration for Xmpp](../../simpleicons-5/X/Xmpp.Local.png) |




## Xmpp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xmpp
include('simpleicons-5/X/Xmpp')

' renders the element
Xmpp('Xmpp', 'Xmpp', 'an optional tech label')
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

' loads the Item which embeds the element Xmpp
include('simpleicons-5/X/Xmpp')

' renders the element
Xmpp('Xmpp', 'Xmpp', 'an optional tech label')
@enduml
```

