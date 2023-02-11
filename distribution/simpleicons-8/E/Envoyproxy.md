# Envoyproxy


```text
simpleicons-8/E/Envoyproxy
```

```text
include('simpleicons-8/E/Envoyproxy')
```



| Illustration | Envoyproxy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Envoyproxy.png) | ![illustration for Envoyproxy](../../simpleicons-8/E/Envoyproxy.Local.png) |




## Envoyproxy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Envoyproxy
include('simpleicons-8/E/Envoyproxy')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Envoyproxy
include('simpleicons-8/E/Envoyproxy')

' renders the element
Envoyproxy('Envoyproxy', 'Envoyproxy', 'an optional tech label', 'an optional description')
@enduml
```

