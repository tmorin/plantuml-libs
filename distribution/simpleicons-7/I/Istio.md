# Istio


```text
simpleicons-7/I/Istio
```

```text
include('simpleicons-7/I/Istio')
```



| Illustration | Istio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Istio.png) | ![illustration for Istio](../../simpleicons-7/I/Istio.Local.png) |




## Istio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Istio
include('simpleicons-7/I/Istio')

' renders the element
Istio('Istio', 'Istio', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Istio
include('simpleicons-7/I/Istio')

' renders the element
Istio('Istio', 'Istio', 'an optional tech label')
@enduml
```

