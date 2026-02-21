# Envoyproxy


```text
simpleicons/E/Envoyproxy
```

```text
include('simpleicons/E/Envoyproxy')
```



| Illustration | Envoyproxy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Envoyproxy.png) | ![illustration for Envoyproxy](../../simpleicons/E/Envoyproxy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EnvoyproxyXs>`
- `<$EnvoyproxySm>`
- `<$EnvoyproxyMd>`
- `<$EnvoyproxyLg>`





## Envoyproxy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Envoyproxy
include('simpleicons/E/Envoyproxy')

' renders the element
Envoyproxy('Envoyproxy', 'Envoyproxy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Envoyproxy
include('simpleicons/E/Envoyproxy')

' renders the element
Envoyproxy('Envoyproxy', 'Envoyproxy', 'an optional tech label', 'an optional description')
@enduml
```

