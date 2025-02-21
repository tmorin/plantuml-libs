# DeploymentNode


```text
c4model/Element/DeploymentNode
```

```text
include('c4model/Element/DeploymentNode')
```



| DeploymentNode |
| :---: |
| ![illustration for DeploymentNode](../../c4model/Element/DeploymentNode.Local.png) |







## DeploymentNode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4model/bootstrap')

' loads the Item which embeds the element DeploymentNode
include('c4model/Element/DeploymentNode')

DeploymentNode('DeploymentNode', 'Deployment Node', 'an optional description label', 'an optional tech label')
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

' loads the Item which embeds the element DeploymentNode
include('c4model/Element/DeploymentNode')

DeploymentNode('DeploymentNode', 'Deployment Node', 'an optional description label', 'an optional tech label')
@enduml
```

