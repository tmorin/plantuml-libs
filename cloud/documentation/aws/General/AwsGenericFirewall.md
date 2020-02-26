# AwsGenericFirewall
```text
elements/aws/General/AwsGenericFirewall
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsGenericFirewall icon](../../../icons/aws/General/AwsGenericFirewall.png) | ![AwsGenericFirewall element](AwsGenericFirewall.element.png) | ![AwsGenericFirewall card](AwsGenericFirewall.card.png) |
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

' loads the AwsGenericFirewall element
include('elements/aws/General/AwsGenericFirewall')
AwsGenericFirewall('element', 'Generic Firewall', 'an optional tech field')
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

' loads the AwsGenericFirewall element
include('elements/aws/General/AwsGenericFirewall')
AwsGenericFirewall('element', 'Generic Firewall', 'an optional tech field')
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

' loads the AwsGenericFirewall card
include('elements/aws/General/AwsGenericFirewall')
AwsGenericFirewallCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsGenericFirewall card
include('elements/aws/General/AwsGenericFirewall')
AwsGenericFirewallCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
