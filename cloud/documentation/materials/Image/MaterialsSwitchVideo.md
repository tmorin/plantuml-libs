# MaterialsSwitchVideo
```text
elements/materials/Image/MaterialsSwitchVideo
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSwitchVideo icon](../../../icons/materials/Image/MaterialsSwitchVideo.png) | ![MaterialsSwitchVideo element](MaterialsSwitchVideo.element.png) | ![MaterialsSwitchVideo card](MaterialsSwitchVideo.card.png) |
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

' loads the MaterialsSwitchVideo element
include('elements/materials/Image/MaterialsSwitchVideo')
MaterialsSwitchVideo('element', 'Switch Video', 'an optional tech field')
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

' loads the MaterialsSwitchVideo element
include('elements/materials/Image/MaterialsSwitchVideo')
MaterialsSwitchVideo('element', 'Switch Video', 'an optional tech field')
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

' loads the MaterialsSwitchVideo card
include('elements/materials/Image/MaterialsSwitchVideo')
MaterialsSwitchVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSwitchVideo card
include('elements/materials/Image/MaterialsSwitchVideo')
MaterialsSwitchVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
