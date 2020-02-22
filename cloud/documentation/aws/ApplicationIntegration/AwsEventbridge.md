# AwsEventbridge
```text
elements/aws/ApplicationIntegration/AwsEventbridge
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEventbridge icon](../../../icons/aws/ApplicationIntegration/AwsEventbridge.png) | ![AwsEventbridge element](AwsEventbridge.element.png) | ![AwsEventbridge card](AwsEventbridge.card.png) |
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

' loads the AwsEventbridge element
include('elements/aws/ApplicationIntegration/AwsEventbridge')
AwsEventbridge('element', 'Eventbridge', 'an optional tech field')
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

' loads the AwsEventbridge element
include('elements/aws/ApplicationIntegration/AwsEventbridge')
AwsEventbridge('element', 'Eventbridge', 'an optional tech field')
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

' loads the AwsEventbridge card
include('elements/aws/ApplicationIntegration/AwsEventbridge')
AwsEventbridgeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEventbridge card
include('elements/aws/ApplicationIntegration/AwsEventbridge')
AwsEventbridgeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
