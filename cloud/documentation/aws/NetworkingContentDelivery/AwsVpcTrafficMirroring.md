# AwsVpcTrafficMirroring
```text
elements/aws/NetworkingContentDelivery/AwsVpcTrafficMirroring
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcTrafficMirroring icon](../../../icons/aws/NetworkingContentDelivery/AwsVpcTrafficMirroring.png) | ![AwsVpcTrafficMirroring element](AwsVpcTrafficMirroring.element.png) | ![AwsVpcTrafficMirroring card](AwsVpcTrafficMirroring.card.png) |
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

' loads the AwsVpcTrafficMirroring element
include('elements/aws/NetworkingContentDelivery/AwsVpcTrafficMirroring')
AwsVpcTrafficMirroring('element', 'Vpc Traffic Mirroring', 'an optional tech field')
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

' loads the AwsVpcTrafficMirroring element
include('elements/aws/NetworkingContentDelivery/AwsVpcTrafficMirroring')
AwsVpcTrafficMirroring('element', 'Vpc Traffic Mirroring', 'an optional tech field')
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

' loads the AwsVpcTrafficMirroring card
include('elements/aws/NetworkingContentDelivery/AwsVpcTrafficMirroring')
AwsVpcTrafficMirroringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcTrafficMirroring card
include('elements/aws/NetworkingContentDelivery/AwsVpcTrafficMirroring')
AwsVpcTrafficMirroringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
