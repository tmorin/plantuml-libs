# MaterialsFormatListBulleted
```text
elements/materials/Editor/MaterialsFormatListBulleted
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatListBulleted icon](../../../icons/materials/Editor/MaterialsFormatListBulleted.png) | ![MaterialsFormatListBulleted element](MaterialsFormatListBulleted.element.png) | ![MaterialsFormatListBulleted card](MaterialsFormatListBulleted.card.png) |
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

' loads the MaterialsFormatListBulleted element
include('elements/materials/Editor/MaterialsFormatListBulleted')
MaterialsFormatListBulleted('element', 'Format List Bulleted', 'an optional tech field')
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

' loads the MaterialsFormatListBulleted element
include('elements/materials/Editor/MaterialsFormatListBulleted')
MaterialsFormatListBulleted('element', 'Format List Bulleted', 'an optional tech field')
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

' loads the MaterialsFormatListBulleted card
include('elements/materials/Editor/MaterialsFormatListBulleted')
MaterialsFormatListBulletedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatListBulleted card
include('elements/materials/Editor/MaterialsFormatListBulleted')
MaterialsFormatListBulletedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
