# Jabber


```text
simpleicons-6/J/Jabber
```

```text
include('simpleicons-6/J/Jabber')
```



| Illustration | Jabber |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/J/Jabber.png) | ![illustration for Jabber](../../simpleicons-6/J/Jabber.Local.png) |




## Jabber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Jabber
include('simpleicons-6/J/Jabber')

' renders the element
Jabber('Jabber', 'Jabber', 'an optional tech label')
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

' loads the Item which embeds the element Jabber
include('simpleicons-6/J/Jabber')

' renders the element
Jabber('Jabber', 'Jabber', 'an optional tech label')
@enduml
```

