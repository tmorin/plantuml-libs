# AwsOpsworksLayers
```text
elements/aws/ManagementGovernance/AwsOpsworksLayers
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsOpsworksLayers icon](../../../icons/aws/ManagementGovernance/AwsOpsworksLayers.png) | ![AwsOpsworksLayers element](AwsOpsworksLayers.element.png) | ![AwsOpsworksLayers card](AwsOpsworksLayers.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsOpsworksLayers element
include('elements/aws/ManagementGovernance/AwsOpsworksLayers')
AwsOpsworksLayers('element', 'Opsworks Layers', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsOpsworksLayers element
include('elements/aws/ManagementGovernance/AwsOpsworksLayers')
AwsOpsworksLayers('element', 'Opsworks Layers', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsOpsworksLayers card
include('elements/aws/ManagementGovernance/AwsOpsworksLayers')
AwsOpsworksLayersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/aws')

' loads the AwsOpsworksLayers card
include('elements/aws/ManagementGovernance/AwsOpsworksLayers')
AwsOpsworksLayersCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
