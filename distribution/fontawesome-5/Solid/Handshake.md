# Handshake


```text
fontawesome-5/Solid/Handshake
```

```text
include('fontawesome-5/Solid/Handshake')
```



| Illustration | Handshake |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Handshake.png) | ![illustration for Handshake](../../fontawesome-5/Solid/Handshake.Local.png) |




## Handshake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Handshake
include('fontawesome-5/Solid/Handshake')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Handshake
include('fontawesome-5/Solid/Handshake')

' renders the element
Handshake('Handshake', 'Handshake', 'an optional tech label')
@enduml
```

