# AwsSpotFleet
```text
elements/aws/GroupIcons/AwsSpotFleet
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSpotFleet icon](../../../icons/aws/GroupIcons/AwsSpotFleet.png) | ![AwsSpotFleet element](AwsSpotFleet.element.png) | ![AwsSpotFleet card](AwsSpotFleet.card.png) |
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

' loads the AwsSpotFleet element
include('elements/aws/GroupIcons/AwsSpotFleet')
AwsSpotFleet('element', 'Spot Fleet', 'an optional tech field')
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

' loads the AwsSpotFleet element
include('elements/aws/GroupIcons/AwsSpotFleet')
AwsSpotFleet('element', 'Spot Fleet', 'an optional tech field')
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

' loads the AwsSpotFleet card
include('elements/aws/GroupIcons/AwsSpotFleet')
AwsSpotFleetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSpotFleet card
include('elements/aws/GroupIcons/AwsSpotFleet')
AwsSpotFleetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
