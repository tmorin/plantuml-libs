# AwsReservedInstanceReporting
```text
elements/aws/AwsCostManagement/AwsReservedInstanceReporting
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsReservedInstanceReporting icon](../../../icons/aws/AwsCostManagement/AwsReservedInstanceReporting.png) | ![AwsReservedInstanceReporting element](AwsReservedInstanceReporting.element.png) | ![AwsReservedInstanceReporting card](AwsReservedInstanceReporting.card.png) |
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

' loads the AwsReservedInstanceReporting element
include('elements/aws/AwsCostManagement/AwsReservedInstanceReporting')
AwsReservedInstanceReporting('element', 'Reserved Instance Reporting', 'an optional tech field')
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

' loads the AwsReservedInstanceReporting element
include('elements/aws/AwsCostManagement/AwsReservedInstanceReporting')
AwsReservedInstanceReporting('element', 'Reserved Instance Reporting', 'an optional tech field')
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

' loads the AwsReservedInstanceReporting card
include('elements/aws/AwsCostManagement/AwsReservedInstanceReporting')
AwsReservedInstanceReportingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsReservedInstanceReporting card
include('elements/aws/AwsCostManagement/AwsReservedInstanceReporting')
AwsReservedInstanceReportingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
