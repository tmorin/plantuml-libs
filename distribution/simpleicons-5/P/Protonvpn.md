# Protonvpn


```text
simpleicons-5/P/Protonvpn
```

```text
include('simpleicons-5/P/Protonvpn')
```



| Illustration | Protonvpn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Protonvpn.png) | ![illustration for Protonvpn](../../simpleicons-5/P/Protonvpn.Local.png) |




## Protonvpn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Protonvpn
include('simpleicons-5/P/Protonvpn')

' renders the element
Protonvpn('Protonvpn', 'Protonvpn', 'an optional tech label')
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

' loads the Item which embeds the element Protonvpn
include('simpleicons-5/P/Protonvpn')

' renders the element
Protonvpn('Protonvpn', 'Protonvpn', 'an optional tech label')
@enduml
```

