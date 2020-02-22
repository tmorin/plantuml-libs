# MaterialsVideocamOff
```text
elements/materials/Av/MaterialsVideocamOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVideocamOff icon](../../../icons/materials/Av/MaterialsVideocamOff.png) | ![MaterialsVideocamOff element](MaterialsVideocamOff.element.png) | ![MaterialsVideocamOff card](MaterialsVideocamOff.card.png) |
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

' loads the MaterialsVideocamOff element
include('elements/materials/Av/MaterialsVideocamOff')
MaterialsVideocamOff('element', 'Videocam Off', 'an optional tech field')
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

' loads the MaterialsVideocamOff element
include('elements/materials/Av/MaterialsVideocamOff')
MaterialsVideocamOff('element', 'Videocam Off', 'an optional tech field')
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

' loads the MaterialsVideocamOff card
include('elements/materials/Av/MaterialsVideocamOff')
MaterialsVideocamOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVideocamOff card
include('elements/materials/Av/MaterialsVideocamOff')
MaterialsVideocamOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
