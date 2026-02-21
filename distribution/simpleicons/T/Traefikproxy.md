# Traefikproxy


```text
simpleicons/T/Traefikproxy
```

```text
include('simpleicons/T/Traefikproxy')
```



| Illustration | Traefikproxy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Traefikproxy.png) | ![illustration for Traefikproxy](../../simpleicons/T/Traefikproxy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TraefikproxyXs>`
- `<$TraefikproxySm>`
- `<$TraefikproxyMd>`
- `<$TraefikproxyLg>`





## Traefikproxy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Traefikproxy
include('simpleicons/T/Traefikproxy')

' renders the element
Traefikproxy('Traefikproxy', 'Traefikproxy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Traefikproxy
include('simpleicons/T/Traefikproxy')

' renders the element
Traefikproxy('Traefikproxy', 'Traefikproxy', 'an optional tech label', 'an optional description')
@enduml
```

