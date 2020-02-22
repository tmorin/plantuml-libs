# MaterialsMonetizationOn
```text
elements/materials/Editor/MaterialsMonetizationOn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMonetizationOn icon](../../../icons/materials/Editor/MaterialsMonetizationOn.png) | ![MaterialsMonetizationOn element](MaterialsMonetizationOn.element.png) | ![MaterialsMonetizationOn card](MaterialsMonetizationOn.card.png) |
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

' loads the MaterialsMonetizationOn element
include('elements/materials/Editor/MaterialsMonetizationOn')
MaterialsMonetizationOn('element', 'Monetization On', 'an optional tech field')
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

' loads the MaterialsMonetizationOn element
include('elements/materials/Editor/MaterialsMonetizationOn')
MaterialsMonetizationOn('element', 'Monetization On', 'an optional tech field')
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

' loads the MaterialsMonetizationOn card
include('elements/materials/Editor/MaterialsMonetizationOn')
MaterialsMonetizationOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsMonetizationOn card
include('elements/materials/Editor/MaterialsMonetizationOn')
MaterialsMonetizationOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
