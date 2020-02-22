# AwsCustomerEnablement
```text
elements/aws/CustomerEnablement/AwsCustomerEnablement
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCustomerEnablement icon](../../../icons/aws/CustomerEnablement/AwsCustomerEnablement.png) | ![AwsCustomerEnablement element](AwsCustomerEnablement.element.png) | ![AwsCustomerEnablement card](AwsCustomerEnablement.card.png) |
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

' loads the AwsCustomerEnablement element
include('elements/aws/CustomerEnablement/AwsCustomerEnablement')
AwsCustomerEnablement('element', 'Customer Enablement', 'an optional tech field')
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

' loads the AwsCustomerEnablement element
include('elements/aws/CustomerEnablement/AwsCustomerEnablement')
AwsCustomerEnablement('element', 'Customer Enablement', 'an optional tech field')
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

' loads the AwsCustomerEnablement card
include('elements/aws/CustomerEnablement/AwsCustomerEnablement')
AwsCustomerEnablementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCustomerEnablement card
include('elements/aws/CustomerEnablement/AwsCustomerEnablement')
AwsCustomerEnablementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
