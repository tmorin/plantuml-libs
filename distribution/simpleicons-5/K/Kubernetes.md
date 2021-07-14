# Kubernetes


```text
simpleicons-5/K/Kubernetes
```

```text
include('simpleicons-5/K/Kubernetes')
```



| Illustration | Kubernetes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kubernetes.png) | ![illustration for Kubernetes](../../simpleicons-5/K/Kubernetes.Local.png) |




## Kubernetes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kubernetes
include('simpleicons-5/K/Kubernetes')

' renders the element
Kubernetes('Kubernetes', 'Kubernetes', 'an optional tech label')
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

' loads the Item which embeds the element Kubernetes
include('simpleicons-5/K/Kubernetes')

' renders the element
Kubernetes('Kubernetes', 'Kubernetes', 'an optional tech label')
@enduml
```

