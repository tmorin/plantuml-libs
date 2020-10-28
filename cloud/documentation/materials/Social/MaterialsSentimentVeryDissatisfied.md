# MaterialsSentimentVeryDissatisfied
```text
elements/materials/Social/MaterialsSentimentVeryDissatisfied
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSentimentVeryDissatisfied icon](../../../icons/materials/Social/MaterialsSentimentVeryDissatisfied.png) | ![MaterialsSentimentVeryDissatisfied element](MaterialsSentimentVeryDissatisfied.element.png) | ![MaterialsSentimentVeryDissatisfied card](MaterialsSentimentVeryDissatisfied.card.png) |
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
include('styles/materials')

' loads the MaterialsSentimentVeryDissatisfied element
include('elements/materials/Social/MaterialsSentimentVeryDissatisfied')
MaterialsSentimentVeryDissatisfied('element', 'Sentiment Very Dissatisfied', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsSentimentVeryDissatisfied element
include('elements/materials/Social/MaterialsSentimentVeryDissatisfied')
MaterialsSentimentVeryDissatisfied('element', 'Sentiment Very Dissatisfied', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsSentimentVeryDissatisfied card
include('elements/materials/Social/MaterialsSentimentVeryDissatisfied')
MaterialsSentimentVeryDissatisfiedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/materials')

' loads the MaterialsSentimentVeryDissatisfied card
include('elements/materials/Social/MaterialsSentimentVeryDissatisfied')
MaterialsSentimentVeryDissatisfiedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
