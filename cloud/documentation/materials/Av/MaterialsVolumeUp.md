# MaterialsVolumeUp
```text
elements/materials/Av/MaterialsVolumeUp
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVolumeUp icon](../../../icons/materials/Av/MaterialsVolumeUp.png) | ![MaterialsVolumeUp element](MaterialsVolumeUp.element.png) | ![MaterialsVolumeUp card](MaterialsVolumeUp.card.png) |
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

' loads the MaterialsVolumeUp element
include('elements/materials/Av/MaterialsVolumeUp')
MaterialsVolumeUp('element', 'Volume Up', 'an optional tech field')
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

' loads the MaterialsVolumeUp element
include('elements/materials/Av/MaterialsVolumeUp')
MaterialsVolumeUp('element', 'Volume Up', 'an optional tech field')
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

' loads the MaterialsVolumeUp card
include('elements/materials/Av/MaterialsVolumeUp')
MaterialsVolumeUpCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVolumeUp card
include('elements/materials/Av/MaterialsVolumeUp')
MaterialsVolumeUpCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
