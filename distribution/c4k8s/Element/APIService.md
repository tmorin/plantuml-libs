# APIService


```text
c4k8s/Element/APIService
```

```text
include('c4k8s/Element/APIService')
```



| APIService |
| :---: |
| ![illustration for APIService](../../c4k8s/Element/APIService.Local.png) |




## APIService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element APIService
include('c4k8s/Element/APIService')

' load the c4model package
include('c4model/bootstrap')
APIService('ApiService', 'Api Service', 'an optional description label')
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

' loads the Item which embeds the element APIService
include('c4k8s/Element/APIService')

' load the c4model package
include('c4model/bootstrap')
APIService('ApiService', 'Api Service', 'an optional description label')
@enduml
```

