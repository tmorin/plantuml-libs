# Istio


```text
simpleicons-14/I/Istio
```

```text
include('simpleicons-14/I/Istio')
```



| Illustration | Istio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Istio.png) | ![illustration for Istio](../../simpleicons-14/I/Istio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IstioXs>`
- `<$IstioSm>`
- `<$IstioMd>`
- `<$IstioLg>`





## Istio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Istio
include('simpleicons-14/I/Istio')

' renders the element
Istio('Istio', 'Istio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Istio
include('simpleicons-14/I/Istio')

' renders the element
Istio('Istio', 'Istio', 'an optional tech label', 'an optional description')
@enduml
```

