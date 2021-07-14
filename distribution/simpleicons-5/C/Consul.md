# Consul


```text
simpleicons-5/C/Consul
```

```text
include('simpleicons-5/C/Consul')
```



| Illustration | Consul |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Consul.png) | ![illustration for Consul](../../simpleicons-5/C/Consul.Local.png) |




## Consul

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Consul
include('simpleicons-5/C/Consul')

' renders the element
Consul('Consul', 'Consul', 'an optional tech label')
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

' loads the Item which embeds the element Consul
include('simpleicons-5/C/Consul')

' renders the element
Consul('Consul', 'Consul', 'an optional tech label')
@enduml
```

