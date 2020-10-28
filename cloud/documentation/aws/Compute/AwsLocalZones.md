# AwsLocalZones
```text
elements/aws/Compute/AwsLocalZones
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsLocalZones icon](../../../icons/aws/Compute/AwsLocalZones.png) | ![AwsLocalZones element](AwsLocalZones.element.png) | ![AwsLocalZones card](AwsLocalZones.card.png) |
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

' loads the AwsLocalZones element
include('elements/aws/Compute/AwsLocalZones')
AwsLocalZones('element', 'Local Zones', 'an optional tech field')
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

' loads the AwsLocalZones element
include('elements/aws/Compute/AwsLocalZones')
AwsLocalZones('element', 'Local Zones', 'an optional tech field')
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

' loads the AwsLocalZones card
include('elements/aws/Compute/AwsLocalZones')
AwsLocalZonesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsLocalZones card
include('elements/aws/Compute/AwsLocalZones')
AwsLocalZonesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
