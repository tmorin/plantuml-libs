# Kubernetes


```text
simpleicons-7/K/Kubernetes
```

```text
include('simpleicons-7/K/Kubernetes')
```



| Illustration | Kubernetes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Kubernetes.png) | ![illustration for Kubernetes](../../simpleicons-7/K/Kubernetes.Local.png) |




## Kubernetes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kubernetes
include('simpleicons-7/K/Kubernetes')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kubernetes
include('simpleicons-7/K/Kubernetes')

' renders the element
Kubernetes('Kubernetes', 'Kubernetes', 'an optional tech label')
@enduml
```

