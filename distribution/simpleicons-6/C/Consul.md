# Consul


```text
simpleicons-6/C/Consul
```

```text
include('simpleicons-6/C/Consul')
```



| Illustration | Consul |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Consul.png) | ![illustration for Consul](../../simpleicons-6/C/Consul.Local.png) |




## Consul

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Consul
include('simpleicons-6/C/Consul')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Consul
include('simpleicons-6/C/Consul')

' renders the element
Consul('Consul', 'Consul', 'an optional tech label')
@enduml
```

