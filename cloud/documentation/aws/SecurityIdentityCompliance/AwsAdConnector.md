# AwsAdConnector
```text
elements/aws/SecurityIdentityCompliance/AwsAdConnector
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsAdConnector icon](../../../icons/aws/SecurityIdentityCompliance/AwsAdConnector.png) | ![AwsAdConnector element](AwsAdConnector.element.png) | ![AwsAdConnector card](AwsAdConnector.card.png) |
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

' loads the AwsAdConnector element
include('elements/aws/SecurityIdentityCompliance/AwsAdConnector')
AwsAdConnector('element', 'Ad Connector', 'an optional tech field')
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

' loads the AwsAdConnector element
include('elements/aws/SecurityIdentityCompliance/AwsAdConnector')
AwsAdConnector('element', 'Ad Connector', 'an optional tech field')
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

' loads the AwsAdConnector card
include('elements/aws/SecurityIdentityCompliance/AwsAdConnector')
AwsAdConnectorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsAdConnector card
include('elements/aws/SecurityIdentityCompliance/AwsAdConnector')
AwsAdConnectorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
