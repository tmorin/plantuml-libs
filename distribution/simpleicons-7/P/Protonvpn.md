# Protonvpn


```text
simpleicons-7/P/Protonvpn
```

```text
include('simpleicons-7/P/Protonvpn')
```



| Illustration | Protonvpn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Protonvpn.png) | ![illustration for Protonvpn](../../simpleicons-7/P/Protonvpn.Local.png) |




## Protonvpn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Protonvpn
include('simpleicons-7/P/Protonvpn')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Protonvpn
include('simpleicons-7/P/Protonvpn')

' renders the element
Protonvpn('Protonvpn', 'Protonvpn', 'an optional tech label')
@enduml
```

