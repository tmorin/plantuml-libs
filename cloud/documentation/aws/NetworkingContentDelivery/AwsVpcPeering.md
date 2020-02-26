# AwsVpcPeering
```text
elements/aws/NetworkingContentDelivery/AwsVpcPeering
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcPeering icon](../../../icons/aws/NetworkingContentDelivery/AwsVpcPeering.png) | ![AwsVpcPeering element](AwsVpcPeering.element.png) | ![AwsVpcPeering card](AwsVpcPeering.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsVpcPeering element
include('elements/aws/NetworkingContentDelivery/AwsVpcPeering')
AwsVpcPeering('element', 'Vpc Peering', 'an optional tech field')
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

' loads the AwsVpcPeering element
include('elements/aws/NetworkingContentDelivery/AwsVpcPeering')
AwsVpcPeering('element', 'Vpc Peering', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsVpcPeering card
include('elements/aws/NetworkingContentDelivery/AwsVpcPeering')
AwsVpcPeeringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcPeering card
include('elements/aws/NetworkingContentDelivery/AwsVpcPeering')
AwsVpcPeeringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
