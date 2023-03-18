# MutatingWebhookConfiguration


```text
c4k8s/Element/MutatingWebhookConfiguration
```

```text
include('c4k8s/Element/MutatingWebhookConfiguration')
```



| MutatingWebhookConfiguration |
| :---: |
| ![illustration for MutatingWebhookConfiguration](../../c4k8s/Element/MutatingWebhookConfiguration.Local.png) |




## MutatingWebhookConfiguration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element MutatingWebhookConfiguration
include('c4k8s/Element/MutatingWebhookConfiguration')

' load the c4model package
include('c4model/bootstrap')
MutatingWebhookConfiguration('MutatingWebhookConfiguration', 'Mutating Webhook Configuration', 'an optional description label')
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

' loads the Item which embeds the element MutatingWebhookConfiguration
include('c4k8s/Element/MutatingWebhookConfiguration')

' load the c4model package
include('c4model/bootstrap')
MutatingWebhookConfiguration('MutatingWebhookConfiguration', 'Mutating Webhook Configuration', 'an optional description label')
@enduml
```

