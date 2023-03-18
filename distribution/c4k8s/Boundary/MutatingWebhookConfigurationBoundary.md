# MutatingWebhookConfigurationBoundary


```text
c4k8s/Boundary/MutatingWebhookConfigurationBoundary
```

```text
include('c4k8s/Boundary/MutatingWebhookConfigurationBoundary')
```



| MutatingWebhookConfigurationBoundary |
| :---: |
| ![illustration for MutatingWebhookConfigurationBoundary](../../c4k8s/Boundary/MutatingWebhookConfigurationBoundary.Local.png) |




## MutatingWebhookConfigurationBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element MutatingWebhookConfigurationBoundary
include('c4k8s/Boundary/MutatingWebhookConfigurationBoundary')

' load the c4model package
include('c4model/bootstrap')
MutatingWebhookConfigurationBoundary('MutatingWebhookConfigurationBoundary', 'Mutating Webhook Configuration Boundary') {
  note as note
  the content of the boundary
  end note
}
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
include('c4k8s/bootstrap')

' loads the Item which embeds the element MutatingWebhookConfigurationBoundary
include('c4k8s/Boundary/MutatingWebhookConfigurationBoundary')

' load the c4model package
include('c4model/bootstrap')
MutatingWebhookConfigurationBoundary('MutatingWebhookConfigurationBoundary', 'Mutating Webhook Configuration Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

