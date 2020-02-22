# MaterialsBlurOn
```text
elements/materials/Image/MaterialsBlurOn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBlurOn icon](../../../icons/materials/Image/MaterialsBlurOn.png) | ![MaterialsBlurOn element](MaterialsBlurOn.element.png) | ![MaterialsBlurOn card](MaterialsBlurOn.card.png) |
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

' loads the MaterialsBlurOn element
include('elements/materials/Image/MaterialsBlurOn')
MaterialsBlurOn('element', 'Blur On', 'an optional tech field')
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

' loads the MaterialsBlurOn element
include('elements/materials/Image/MaterialsBlurOn')
MaterialsBlurOn('element', 'Blur On', 'an optional tech field')
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

' loads the MaterialsBlurOn card
include('elements/materials/Image/MaterialsBlurOn')
MaterialsBlurOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBlurOn card
include('elements/materials/Image/MaterialsBlurOn')
MaterialsBlurOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
