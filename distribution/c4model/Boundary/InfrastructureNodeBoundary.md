# InfrastructureNodeBoundary


```text
c4model/Boundary/InfrastructureNodeBoundary
```

```text
include('c4model/Boundary/InfrastructureNodeBoundary')
```



| InfrastructureNodeBoundary |
| :---: |
| ![illustration for InfrastructureNodeBoundary](../../c4model/Boundary/InfrastructureNodeBoundary.Local.png) |




## InfrastructureNodeBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4model/bootstrap')

' loads the Item which embeds the element InfrastructureNodeBoundary
include('c4model/Boundary/InfrastructureNodeBoundary')

InfrastructureNodeBoundary('InfrastructureNodeBoundary', 'Infrastructure Node Boundary', 'an optional tech label') {
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
include('c4model/bootstrap')

' loads the Item which embeds the element InfrastructureNodeBoundary
include('c4model/Boundary/InfrastructureNodeBoundary')

InfrastructureNodeBoundary('InfrastructureNodeBoundary', 'Infrastructure Node Boundary', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

