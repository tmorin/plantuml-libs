# MaterialsAudiotrack
```text
elements/materials/Image/MaterialsAudiotrack
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAudiotrack icon](../../../icons/materials/Image/MaterialsAudiotrack.png) | ![MaterialsAudiotrack element](MaterialsAudiotrack.element.png) | ![MaterialsAudiotrack card](MaterialsAudiotrack.card.png) |
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

' loads the MaterialsAudiotrack element
include('elements/materials/Image/MaterialsAudiotrack')
MaterialsAudiotrack('element', 'Audiotrack', 'an optional tech field')
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

' loads the MaterialsAudiotrack element
include('elements/materials/Image/MaterialsAudiotrack')
MaterialsAudiotrack('element', 'Audiotrack', 'an optional tech field')
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

' loads the MaterialsAudiotrack card
include('elements/materials/Image/MaterialsAudiotrack')
MaterialsAudiotrackCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAudiotrack card
include('elements/materials/Image/MaterialsAudiotrack')
MaterialsAudiotrackCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
