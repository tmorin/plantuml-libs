# AwsCloudwatch
```text
elements/aws/ManagementGovernance/AwsCloudwatch
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudwatch icon](../../../icons/aws/ManagementGovernance/AwsCloudwatch.png) | ![AwsCloudwatch element](AwsCloudwatch.element.png) | ![AwsCloudwatch card](AwsCloudwatch.card.png) |
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

' loads the AwsCloudwatch element
include('elements/aws/ManagementGovernance/AwsCloudwatch')
AwsCloudwatch('element', 'Cloudwatch', 'an optional tech field')
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

' loads the AwsCloudwatch element
include('elements/aws/ManagementGovernance/AwsCloudwatch')
AwsCloudwatch('element', 'Cloudwatch', 'an optional tech field')
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

' loads the AwsCloudwatch card
include('elements/aws/ManagementGovernance/AwsCloudwatch')
AwsCloudwatchCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudwatch card
include('elements/aws/ManagementGovernance/AwsCloudwatch')
AwsCloudwatchCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
