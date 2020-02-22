# MaterialsSurroundSound
```text
elements/materials/Av/MaterialsSurroundSound
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSurroundSound icon](../../../icons/materials/Av/MaterialsSurroundSound.png) | ![MaterialsSurroundSound element](MaterialsSurroundSound.element.png) | ![MaterialsSurroundSound card](MaterialsSurroundSound.card.png) |
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

' loads the MaterialsSurroundSound element
include('elements/materials/Av/MaterialsSurroundSound')
MaterialsSurroundSound('element', 'Surround Sound', 'an optional tech field')
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

' loads the MaterialsSurroundSound element
include('elements/materials/Av/MaterialsSurroundSound')
MaterialsSurroundSound('element', 'Surround Sound', 'an optional tech field')
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

' loads the MaterialsSurroundSound card
include('elements/materials/Av/MaterialsSurroundSound')
MaterialsSurroundSoundCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSurroundSound card
include('elements/materials/Av/MaterialsSurroundSound')
MaterialsSurroundSoundCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
