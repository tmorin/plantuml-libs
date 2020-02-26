# MaterialsAssessment
```text
elements/materials/Action/MaterialsAssessment
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAssessment icon](../../../icons/materials/Action/MaterialsAssessment.png) | ![MaterialsAssessment element](MaterialsAssessment.element.png) | ![MaterialsAssessment card](MaterialsAssessment.card.png) |
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

' loads the MaterialsAssessment element
include('elements/materials/Action/MaterialsAssessment')
MaterialsAssessment('element', 'Assessment', 'an optional tech field')
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

' loads the MaterialsAssessment element
include('elements/materials/Action/MaterialsAssessment')
MaterialsAssessment('element', 'Assessment', 'an optional tech field')
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

' loads the MaterialsAssessment card
include('elements/materials/Action/MaterialsAssessment')
MaterialsAssessmentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAssessment card
include('elements/materials/Action/MaterialsAssessment')
MaterialsAssessmentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
