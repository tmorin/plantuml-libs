# MaterialsHeadset
```text
elements/materials/Hardware/MaterialsHeadset
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsHeadset icon](../../../icons/materials/Hardware/MaterialsHeadset.png) | ![MaterialsHeadset element](MaterialsHeadset.element.png) | ![MaterialsHeadset card](MaterialsHeadset.card.png) |
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

' loads the MaterialsHeadset element
include('elements/materials/Hardware/MaterialsHeadset')
MaterialsHeadset('element', 'Headset', 'an optional tech field')
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

' loads the MaterialsHeadset element
include('elements/materials/Hardware/MaterialsHeadset')
MaterialsHeadset('element', 'Headset', 'an optional tech field')
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

' loads the MaterialsHeadset card
include('elements/materials/Hardware/MaterialsHeadset')
MaterialsHeadsetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsHeadset card
include('elements/materials/Hardware/MaterialsHeadset')
MaterialsHeadsetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
