# Linkerd


```text
simpleicons-6/L/Linkerd
```

```text
include('simpleicons-6/L/Linkerd')
```



| Illustration | Linkerd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Linkerd.png) | ![illustration for Linkerd](../../simpleicons-6/L/Linkerd.Local.png) |




## Linkerd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Linkerd
include('simpleicons-6/L/Linkerd')

' renders the element
Linkerd('Linkerd', 'Linkerd', 'an optional tech label')
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

' loads the Item which embeds the element Linkerd
include('simpleicons-6/L/Linkerd')

' renders the element
Linkerd('Linkerd', 'Linkerd', 'an optional tech label')
@enduml
```

