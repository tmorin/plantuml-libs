# Kubernetes


```text
simpleicons/K/Kubernetes
```

```text
include('simpleicons/K/Kubernetes')
```



| Illustration | Kubernetes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kubernetes.png) | ![illustration for Kubernetes](../../simpleicons/K/Kubernetes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KubernetesXs>`
- `<$KubernetesSm>`
- `<$KubernetesMd>`
- `<$KubernetesLg>`





## Kubernetes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kubernetes
include('simpleicons/K/Kubernetes')

' renders the element
Kubernetes('Kubernetes', 'Kubernetes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kubernetes
include('simpleicons/K/Kubernetes')

' renders the element
Kubernetes('Kubernetes', 'Kubernetes', 'an optional tech label', 'an optional description')
@enduml
```

