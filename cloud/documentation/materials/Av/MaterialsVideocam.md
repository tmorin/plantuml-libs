# MaterialsVideocam
```text
elements/materials/Av/MaterialsVideocam
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVideocam icon](../../../icons/materials/Av/MaterialsVideocam.png) | ![MaterialsVideocam element](MaterialsVideocam.element.png) | ![MaterialsVideocam card](MaterialsVideocam.card.png) |
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

' loads the MaterialsVideocam element
include('elements/materials/Av/MaterialsVideocam')
MaterialsVideocam('element', 'Videocam', 'an optional tech field')
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

' loads the MaterialsVideocam element
include('elements/materials/Av/MaterialsVideocam')
MaterialsVideocam('element', 'Videocam', 'an optional tech field')
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

' loads the MaterialsVideocam card
include('elements/materials/Av/MaterialsVideocam')
MaterialsVideocamCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVideocam card
include('elements/materials/Av/MaterialsVideocam')
MaterialsVideocamCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
