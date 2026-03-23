# Kubernetes


```text
fontawesome/Brands/Kubernetes
```

```text
include('fontawesome/Brands/Kubernetes')
```



| Illustration | Kubernetes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Kubernetes.png) | ![illustration for Kubernetes](../../fontawesome/Brands/Kubernetes.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Kubernetes
include('fontawesome/Brands/Kubernetes')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Kubernetes
include('fontawesome/Brands/Kubernetes')

' renders the element
Kubernetes('Kubernetes', 'Kubernetes', 'an optional tech label', 'an optional description')
@enduml
```

