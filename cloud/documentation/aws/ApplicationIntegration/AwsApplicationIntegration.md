# AwsApplicationIntegration
```text
elements/aws/ApplicationIntegration/AwsApplicationIntegration
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsApplicationIntegration icon](../../../icons/aws/ApplicationIntegration/AwsApplicationIntegration.png) | ![AwsApplicationIntegration element](AwsApplicationIntegration.element.png) | ![AwsApplicationIntegration card](AwsApplicationIntegration.card.png) |
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

' loads the AwsApplicationIntegration element
include('elements/aws/ApplicationIntegration/AwsApplicationIntegration')
AwsApplicationIntegration('element', 'Application Integration', 'an optional tech field')
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

' loads the AwsApplicationIntegration element
include('elements/aws/ApplicationIntegration/AwsApplicationIntegration')
AwsApplicationIntegration('element', 'Application Integration', 'an optional tech field')
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

' loads the AwsApplicationIntegration card
include('elements/aws/ApplicationIntegration/AwsApplicationIntegration')
AwsApplicationIntegrationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsApplicationIntegration card
include('elements/aws/ApplicationIntegration/AwsApplicationIntegration')
AwsApplicationIntegrationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
