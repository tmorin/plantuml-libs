# MaterialsFormatSize
```text
elements/materials/Editor/MaterialsFormatSize
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatSize icon](../../../icons/materials/Editor/MaterialsFormatSize.png) | ![MaterialsFormatSize element](MaterialsFormatSize.element.png) | ![MaterialsFormatSize card](MaterialsFormatSize.card.png) |
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

' loads the MaterialsFormatSize element
include('elements/materials/Editor/MaterialsFormatSize')
MaterialsFormatSize('element', 'Format Size', 'an optional tech field')
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

' loads the MaterialsFormatSize element
include('elements/materials/Editor/MaterialsFormatSize')
MaterialsFormatSize('element', 'Format Size', 'an optional tech field')
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

' loads the MaterialsFormatSize card
include('elements/materials/Editor/MaterialsFormatSize')
MaterialsFormatSizeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatSize card
include('elements/materials/Editor/MaterialsFormatSize')
MaterialsFormatSizeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
