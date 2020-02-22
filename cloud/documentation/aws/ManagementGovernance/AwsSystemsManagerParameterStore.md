# AwsSystemsManagerParameterStore
```text
elements/aws/ManagementGovernance/AwsSystemsManagerParameterStore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSystemsManagerParameterStore icon](../../../icons/aws/ManagementGovernance/AwsSystemsManagerParameterStore.png) | ![AwsSystemsManagerParameterStore element](AwsSystemsManagerParameterStore.element.png) | ![AwsSystemsManagerParameterStore card](AwsSystemsManagerParameterStore.card.png) |
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

' loads the AwsSystemsManagerParameterStore element
include('elements/aws/ManagementGovernance/AwsSystemsManagerParameterStore')
AwsSystemsManagerParameterStore('element', 'Systems Manager Parameter Store', 'an optional tech field')
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

' loads the AwsSystemsManagerParameterStore element
include('elements/aws/ManagementGovernance/AwsSystemsManagerParameterStore')
AwsSystemsManagerParameterStore('element', 'Systems Manager Parameter Store', 'an optional tech field')
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

' loads the AwsSystemsManagerParameterStore card
include('elements/aws/ManagementGovernance/AwsSystemsManagerParameterStore')
AwsSystemsManagerParameterStoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSystemsManagerParameterStore card
include('elements/aws/ManagementGovernance/AwsSystemsManagerParameterStore')
AwsSystemsManagerParameterStoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
