# MaterialsHeadsetMic
```text
elements/materials/Hardware/MaterialsHeadsetMic
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsHeadsetMic icon](../../../icons/materials/Hardware/MaterialsHeadsetMic.png) | ![MaterialsHeadsetMic element](MaterialsHeadsetMic.element.png) | ![MaterialsHeadsetMic card](MaterialsHeadsetMic.card.png) |
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

' loads the MaterialsHeadsetMic element
include('elements/materials/Hardware/MaterialsHeadsetMic')
MaterialsHeadsetMic('element', 'Headset Mic', 'an optional tech field')
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

' loads the MaterialsHeadsetMic element
include('elements/materials/Hardware/MaterialsHeadsetMic')
MaterialsHeadsetMic('element', 'Headset Mic', 'an optional tech field')
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

' loads the MaterialsHeadsetMic card
include('elements/materials/Hardware/MaterialsHeadsetMic')
MaterialsHeadsetMicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsHeadsetMic card
include('elements/materials/Hardware/MaterialsHeadsetMic')
MaterialsHeadsetMicCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
