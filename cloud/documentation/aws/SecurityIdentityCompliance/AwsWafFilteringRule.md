# AwsWafFilteringRule
```text
elements/aws/SecurityIdentityCompliance/AwsWafFilteringRule
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsWafFilteringRule icon](../../../icons/aws/SecurityIdentityCompliance/AwsWafFilteringRule.png) | ![AwsWafFilteringRule element](AwsWafFilteringRule.element.png) | ![AwsWafFilteringRule card](AwsWafFilteringRule.card.png) |
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

' loads the AwsWafFilteringRule element
include('elements/aws/SecurityIdentityCompliance/AwsWafFilteringRule')
AwsWafFilteringRule('element', 'Waf Filtering Rule', 'an optional tech field')
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

' loads the AwsWafFilteringRule element
include('elements/aws/SecurityIdentityCompliance/AwsWafFilteringRule')
AwsWafFilteringRule('element', 'Waf Filtering Rule', 'an optional tech field')
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

' loads the AwsWafFilteringRule card
include('elements/aws/SecurityIdentityCompliance/AwsWafFilteringRule')
AwsWafFilteringRuleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsWafFilteringRule card
include('elements/aws/SecurityIdentityCompliance/AwsWafFilteringRule')
AwsWafFilteringRuleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
