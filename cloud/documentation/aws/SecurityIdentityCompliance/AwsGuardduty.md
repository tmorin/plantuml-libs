# AwsGuardduty
```text
elements/aws/SecurityIdentityCompliance/AwsGuardduty
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsGuardduty icon](../../../icons/aws/SecurityIdentityCompliance/AwsGuardduty.png) | ![AwsGuardduty element](AwsGuardduty.element.png) | ![AwsGuardduty card](AwsGuardduty.card.png) |
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

' loads the AwsGuardduty element
include('elements/aws/SecurityIdentityCompliance/AwsGuardduty')
AwsGuardduty('element', 'Guardduty', 'an optional tech field')
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

' loads the AwsGuardduty element
include('elements/aws/SecurityIdentityCompliance/AwsGuardduty')
AwsGuardduty('element', 'Guardduty', 'an optional tech field')
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

' loads the AwsGuardduty card
include('elements/aws/SecurityIdentityCompliance/AwsGuardduty')
AwsGuarddutyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsGuardduty card
include('elements/aws/SecurityIdentityCompliance/AwsGuardduty')
AwsGuarddutyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
