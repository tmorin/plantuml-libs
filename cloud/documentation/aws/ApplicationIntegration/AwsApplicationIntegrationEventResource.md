# AwsApplicationIntegrationEventResource
```text
elements/aws/ApplicationIntegration/AwsApplicationIntegrationEventResource
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsApplicationIntegrationEventResource icon](../../../icons/aws/ApplicationIntegration/AwsApplicationIntegrationEventResource.png) | ![AwsApplicationIntegrationEventResource element](AwsApplicationIntegrationEventResource.element.png) | ![AwsApplicationIntegrationEventResource card](AwsApplicationIntegrationEventResource.card.png) |
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

' loads the AwsApplicationIntegrationEventResource element
include('elements/aws/ApplicationIntegration/AwsApplicationIntegrationEventResource')
AwsApplicationIntegrationEventResource('element', 'Application Integration Event Resource', 'an optional tech field')
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

' loads the AwsApplicationIntegrationEventResource element
include('elements/aws/ApplicationIntegration/AwsApplicationIntegrationEventResource')
AwsApplicationIntegrationEventResource('element', 'Application Integration Event Resource', 'an optional tech field')
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

' loads the AwsApplicationIntegrationEventResource card
include('elements/aws/ApplicationIntegration/AwsApplicationIntegrationEventResource')
AwsApplicationIntegrationEventResourceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsApplicationIntegrationEventResource card
include('elements/aws/ApplicationIntegration/AwsApplicationIntegrationEventResource')
AwsApplicationIntegrationEventResourceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
