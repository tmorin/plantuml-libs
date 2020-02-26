# MaterialsSentimentSatisfied
```text
elements/materials/Social/MaterialsSentimentSatisfied
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSentimentSatisfied icon](../../../icons/materials/Social/MaterialsSentimentSatisfied.png) | ![MaterialsSentimentSatisfied element](MaterialsSentimentSatisfied.element.png) | ![MaterialsSentimentSatisfied card](MaterialsSentimentSatisfied.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsSentimentSatisfied element
include('elements/materials/Social/MaterialsSentimentSatisfied')
MaterialsSentimentSatisfied('element', 'Sentiment Satisfied', 'an optional tech field')
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

' loads the MaterialsSentimentSatisfied element
include('elements/materials/Social/MaterialsSentimentSatisfied')
MaterialsSentimentSatisfied('element', 'Sentiment Satisfied', 'an optional tech field')
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

' loads the style
include('styles/materials')

' loads the MaterialsSentimentSatisfied card
include('elements/materials/Social/MaterialsSentimentSatisfied')
MaterialsSentimentSatisfiedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSentimentSatisfied card
include('elements/materials/Social/MaterialsSentimentSatisfied')
MaterialsSentimentSatisfiedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
