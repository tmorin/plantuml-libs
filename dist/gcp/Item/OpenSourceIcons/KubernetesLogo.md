# Kubernetes Logo

```text
gcp/Item/OpenSourceIcons/KubernetesLogo
```

```text
include('gcp/Item/OpenSourceIcons/KubernetesLogo')
```

|icon|card|element|group|
|---|---|---|---|
|![](KubernetesLogo.png)|![](KubernetesLogo.card.png)|![](KubernetesLogo.element.png)|![](KubernetesLogo.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the KubernetesLogo element
include('gcp/Item/OpenSourceIcons/KubernetesLogo')
KubernetesLogoCard('kubernetes_logo', 'Kubernetes Logo', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the KubernetesLogo element
include('gcp/Item/OpenSourceIcons/KubernetesLogo')
KubernetesLogoCard('kubernetes_logo', 'Kubernetes Logo', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the KubernetesLogo element
include('gcp/Item/OpenSourceIcons/KubernetesLogo')
KubernetesLogo('kubernetes_logo', 'Kubernetes Logo', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the KubernetesLogo element
include('gcp/Item/OpenSourceIcons/KubernetesLogo')
KubernetesLogo('kubernetes_logo', 'Kubernetes Logo', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the KubernetesLogo element
include('gcp/Item/OpenSourceIcons/KubernetesLogo')
KubernetesLogoGroup('kubernetes_logo', 'Kubernetes Logo', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the KubernetesLogo element
include('gcp/Item/OpenSourceIcons/KubernetesLogo')
KubernetesLogoGroup('kubernetes_logo', 'Kubernetes Logo', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

