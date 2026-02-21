# Consul


```text
simpleicons/C/Consul
```

```text
include('simpleicons/C/Consul')
```



| Illustration | Consul |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Consul.png) | ![illustration for Consul](../../simpleicons/C/Consul.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConsulXs>`
- `<$ConsulSm>`
- `<$ConsulMd>`
- `<$ConsulLg>`





## Consul

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Consul
include('simpleicons/C/Consul')

' renders the element
Consul('Consul', 'Consul', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Consul
include('simpleicons/C/Consul')

' renders the element
Consul('Consul', 'Consul', 'an optional tech label', 'an optional description')
@enduml
```

