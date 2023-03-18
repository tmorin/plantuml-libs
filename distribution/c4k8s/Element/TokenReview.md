# TokenReview


```text
c4k8s/Element/TokenReview
```

```text
include('c4k8s/Element/TokenReview')
```



| TokenReview |
| :---: |
| ![illustration for TokenReview](../../c4k8s/Element/TokenReview.Local.png) |




## TokenReview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element TokenReview
include('c4k8s/Element/TokenReview')

' load the c4model package
include('c4model/bootstrap')
TokenReview('TokenReview', 'Token Review', 'an optional description label')
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

' loads the Item which embeds the element TokenReview
include('c4k8s/Element/TokenReview')

' load the c4model package
include('c4model/bootstrap')
TokenReview('TokenReview', 'Token Review', 'an optional description label')
@enduml
```

