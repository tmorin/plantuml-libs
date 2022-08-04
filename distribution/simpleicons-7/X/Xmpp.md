# Xmpp


```text
simpleicons-7/X/Xmpp
```

```text
include('simpleicons-7/X/Xmpp')
```



| Illustration | Xmpp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/X/Xmpp.png) | ![illustration for Xmpp](../../simpleicons-7/X/Xmpp.Local.png) |




## Xmpp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Xmpp
include('simpleicons-7/X/Xmpp')

' renders the element
Xmpp('Xmpp', 'Xmpp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xmpp
include('simpleicons-7/X/Xmpp')

' renders the element
Xmpp('Xmpp', 'Xmpp', 'an optional tech label', 'an optional description')
@enduml
```

