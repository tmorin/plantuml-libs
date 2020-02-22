# AwsCostManagement
```text
elements/aws/AwsCostManagement/AwsCostManagement
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCostManagement icon](../../../icons/aws/AwsCostManagement/AwsCostManagement.png) | ![AwsCostManagement element](AwsCostManagement.element.png) | ![AwsCostManagement card](AwsCostManagement.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the AwsCostManagement element
include('elements/aws/AwsCostManagement/AwsCostManagement')
AwsCostManagement('element', 'Cost Management', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AwsCostManagement element
include('elements/aws/AwsCostManagement/AwsCostManagement')
AwsCostManagement('element', 'Cost Management', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/gcp')

' loads the AwsCostManagement card
include('elements/aws/AwsCostManagement/AwsCostManagement')
AwsCostManagementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the GCP style
include('styles/gcp')

' loads the AwsCostManagement card
include('elements/aws/AwsCostManagement/AwsCostManagement')
AwsCostManagementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
