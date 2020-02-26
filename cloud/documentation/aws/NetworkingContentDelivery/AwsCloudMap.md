# AwsCloudMap
```text
elements/aws/NetworkingContentDelivery/AwsCloudMap
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudMap icon](../../../icons/aws/NetworkingContentDelivery/AwsCloudMap.png) | ![AwsCloudMap element](AwsCloudMap.element.png) | ![AwsCloudMap card](AwsCloudMap.card.png) |
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

' loads the AwsCloudMap element
include('elements/aws/NetworkingContentDelivery/AwsCloudMap')
AwsCloudMap('element', 'Cloud Map', 'an optional tech field')
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

' loads the AwsCloudMap element
include('elements/aws/NetworkingContentDelivery/AwsCloudMap')
AwsCloudMap('element', 'Cloud Map', 'an optional tech field')
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

' loads the AwsCloudMap card
include('elements/aws/NetworkingContentDelivery/AwsCloudMap')
AwsCloudMapCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudMap card
include('elements/aws/NetworkingContentDelivery/AwsCloudMap')
AwsCloudMapCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
