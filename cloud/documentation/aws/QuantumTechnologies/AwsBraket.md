# AwsBraket
```text
elements/aws/QuantumTechnologies/AwsBraket
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsBraket icon](../../../icons/aws/QuantumTechnologies/AwsBraket.png) | ![AwsBraket element](AwsBraket.element.png) | ![AwsBraket card](AwsBraket.card.png) |
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
include('styles/aws')

' loads the AwsBraket element
include('elements/aws/QuantumTechnologies/AwsBraket')
AwsBraket('element', 'Braket', 'an optional tech field')
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
include('styles/aws')

' loads the AwsBraket element
include('elements/aws/QuantumTechnologies/AwsBraket')
AwsBraket('element', 'Braket', 'an optional tech field')
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
include('styles/aws')

' loads the AwsBraket card
include('elements/aws/QuantumTechnologies/AwsBraket')
AwsBraketCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/aws')

' loads the AwsBraket card
include('elements/aws/QuantumTechnologies/AwsBraket')
AwsBraketCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
