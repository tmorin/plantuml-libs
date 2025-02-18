# Traefikproxy


```text
simpleicons-14/T/Traefikproxy
```

```text
include('simpleicons-14/T/Traefikproxy')
```



| Illustration | Traefikproxy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Traefikproxy.png) | ![illustration for Traefikproxy](../../simpleicons-14/T/Traefikproxy.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Traefikproxy
include('simpleicons-14/T/Traefikproxy')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Traefikproxy
include('simpleicons-14/T/Traefikproxy')

' renders the element
Traefikproxy('Traefikproxy', 'Traefikproxy', 'an optional tech label', 'an optional description')
@enduml
```

