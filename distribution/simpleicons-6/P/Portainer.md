# Portainer


```text
simpleicons-6/P/Portainer
```

```text
include('simpleicons-6/P/Portainer')
```



| Illustration | Portainer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Portainer.png) | ![illustration for Portainer](../../simpleicons-6/P/Portainer.Local.png) |




## Portainer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Portainer
include('simpleicons-6/P/Portainer')

' renders the element
Portainer('Portainer', 'Portainer', 'an optional tech label')
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

' loads the Item which embeds the element Portainer
include('simpleicons-6/P/Portainer')

' renders the element
Portainer('Portainer', 'Portainer', 'an optional tech label')
@enduml
```

