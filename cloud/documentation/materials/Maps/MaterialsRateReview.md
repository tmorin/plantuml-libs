# MaterialsRateReview
```text
elements/materials/Maps/MaterialsRateReview
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRateReview icon](../../../icons/materials/Maps/MaterialsRateReview.png) | ![MaterialsRateReview element](MaterialsRateReview.element.png) | ![MaterialsRateReview card](MaterialsRateReview.card.png) |
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

' loads the MaterialsRateReview element
include('elements/materials/Maps/MaterialsRateReview')
MaterialsRateReview('element', 'Rate Review', 'an optional tech field')
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

' loads the MaterialsRateReview element
include('elements/materials/Maps/MaterialsRateReview')
MaterialsRateReview('element', 'Rate Review', 'an optional tech field')
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

' loads the MaterialsRateReview card
include('elements/materials/Maps/MaterialsRateReview')
MaterialsRateReviewCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRateReview card
include('elements/materials/Maps/MaterialsRateReview')
MaterialsRateReviewCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
