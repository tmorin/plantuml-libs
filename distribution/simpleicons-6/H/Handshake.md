# Handshake


```text
simpleicons-6/H/Handshake
```

```text
include('simpleicons-6/H/Handshake')
```



| Illustration | Handshake |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Handshake.png) | ![illustration for Handshake](../../simpleicons-6/H/Handshake.Local.png) |




## Handshake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Handshake
include('simpleicons-6/H/Handshake')

' renders the element
Handshake('Handshake', 'Handshake', 'an optional tech label')
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

' loads the Item which embeds the element Handshake
include('simpleicons-6/H/Handshake')

' renders the element
Handshake('Handshake', 'Handshake', 'an optional tech label')
@enduml
```

