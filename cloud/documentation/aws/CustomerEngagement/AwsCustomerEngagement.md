# AwsCustomerEngagement
```text
elements/aws/CustomerEngagement/AwsCustomerEngagement
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCustomerEngagement icon](../../../icons/aws/CustomerEngagement/AwsCustomerEngagement.png) | ![AwsCustomerEngagement element](AwsCustomerEngagement.element.png) | ![AwsCustomerEngagement card](AwsCustomerEngagement.card.png) |
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

' loads the AwsCustomerEngagement element
include('elements/aws/CustomerEngagement/AwsCustomerEngagement')
AwsCustomerEngagement('element', 'Customer Engagement', 'an optional tech field')
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

' loads the AwsCustomerEngagement element
include('elements/aws/CustomerEngagement/AwsCustomerEngagement')
AwsCustomerEngagement('element', 'Customer Engagement', 'an optional tech field')
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

' loads the AwsCustomerEngagement card
include('elements/aws/CustomerEngagement/AwsCustomerEngagement')
AwsCustomerEngagementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCustomerEngagement card
include('elements/aws/CustomerEngagement/AwsCustomerEngagement')
AwsCustomerEngagementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
