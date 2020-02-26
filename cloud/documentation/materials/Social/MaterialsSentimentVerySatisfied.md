# MaterialsSentimentVerySatisfied
```text
elements/materials/Social/MaterialsSentimentVerySatisfied
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSentimentVerySatisfied icon](../../../icons/materials/Social/MaterialsSentimentVerySatisfied.png) | ![MaterialsSentimentVerySatisfied element](MaterialsSentimentVerySatisfied.element.png) | ![MaterialsSentimentVerySatisfied card](MaterialsSentimentVerySatisfied.card.png) |
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

' loads the MaterialsSentimentVerySatisfied element
include('elements/materials/Social/MaterialsSentimentVerySatisfied')
MaterialsSentimentVerySatisfied('element', 'Sentiment Very Satisfied', 'an optional tech field')
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

' loads the MaterialsSentimentVerySatisfied element
include('elements/materials/Social/MaterialsSentimentVerySatisfied')
MaterialsSentimentVerySatisfied('element', 'Sentiment Very Satisfied', 'an optional tech field')
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

' loads the MaterialsSentimentVerySatisfied card
include('elements/materials/Social/MaterialsSentimentVerySatisfied')
MaterialsSentimentVerySatisfiedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSentimentVerySatisfied card
include('elements/materials/Social/MaterialsSentimentVerySatisfied')
MaterialsSentimentVerySatisfiedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
