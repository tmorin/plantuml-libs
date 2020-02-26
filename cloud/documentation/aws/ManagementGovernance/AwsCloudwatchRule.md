# AwsCloudwatchRule
```text
elements/aws/ManagementGovernance/AwsCloudwatchRule
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudwatchRule icon](../../../icons/aws/ManagementGovernance/AwsCloudwatchRule.png) | ![AwsCloudwatchRule element](AwsCloudwatchRule.element.png) | ![AwsCloudwatchRule card](AwsCloudwatchRule.card.png) |
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

' loads the AwsCloudwatchRule element
include('elements/aws/ManagementGovernance/AwsCloudwatchRule')
AwsCloudwatchRule('element', 'Cloudwatch Rule', 'an optional tech field')
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

' loads the AwsCloudwatchRule element
include('elements/aws/ManagementGovernance/AwsCloudwatchRule')
AwsCloudwatchRule('element', 'Cloudwatch Rule', 'an optional tech field')
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

' loads the AwsCloudwatchRule card
include('elements/aws/ManagementGovernance/AwsCloudwatchRule')
AwsCloudwatchRuleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudwatchRule card
include('elements/aws/ManagementGovernance/AwsCloudwatchRule')
AwsCloudwatchRuleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
