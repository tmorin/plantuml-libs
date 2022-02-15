# Wireguard


```text
simpleicons-6/W/Wireguard
```

```text
include('simpleicons-6/W/Wireguard')
```



| Illustration | Wireguard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wireguard.png) | ![illustration for Wireguard](../../simpleicons-6/W/Wireguard.Local.png) |




## Wireguard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wireguard
include('simpleicons-6/W/Wireguard')

' renders the element
Wireguard('Wireguard', 'Wireguard', 'an optional tech label')
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

' loads the Item which embeds the element Wireguard
include('simpleicons-6/W/Wireguard')

' renders the element
Wireguard('Wireguard', 'Wireguard', 'an optional tech label')
@enduml
```

