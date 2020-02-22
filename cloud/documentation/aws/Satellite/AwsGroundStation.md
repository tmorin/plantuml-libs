# AwsGroundStation
```text
elements/aws/Satellite/AwsGroundStation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsGroundStation icon](../../../icons/aws/Satellite/AwsGroundStation.png) | ![AwsGroundStation element](AwsGroundStation.element.png) | ![AwsGroundStation card](AwsGroundStation.card.png) |
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

' loads the AwsGroundStation element
include('elements/aws/Satellite/AwsGroundStation')
AwsGroundStation('element', 'Ground Station', 'an optional tech field')
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

' loads the AwsGroundStation element
include('elements/aws/Satellite/AwsGroundStation')
AwsGroundStation('element', 'Ground Station', 'an optional tech field')
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

' loads the AwsGroundStation card
include('elements/aws/Satellite/AwsGroundStation')
AwsGroundStationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsGroundStation card
include('elements/aws/Satellite/AwsGroundStation')
AwsGroundStationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
