# ResourceClaimTemplateBoundary


```text
c4k8s/Boundary/ResourceClaimTemplateBoundary
```

```text
include('c4k8s/Boundary/ResourceClaimTemplateBoundary')
```



| ResourceClaimTemplateBoundary |
| :---: |
| ![illustration for ResourceClaimTemplateBoundary](../../c4k8s/Boundary/ResourceClaimTemplateBoundary.Local.png) |




## ResourceClaimTemplateBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element ResourceClaimTemplateBoundary
include('c4k8s/Boundary/ResourceClaimTemplateBoundary')

' load the c4model package
include('c4model/bootstrap')
ResourceClaimTemplateBoundary('ResourceClaimTemplateBoundary', 'Resource Claim Template Boundary') {
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

' loads the Item which embeds the element ResourceClaimTemplateBoundary
include('c4k8s/Boundary/ResourceClaimTemplateBoundary')

' load the c4model package
include('c4model/bootstrap')
ResourceClaimTemplateBoundary('ResourceClaimTemplateBoundary', 'Resource Claim Template Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

