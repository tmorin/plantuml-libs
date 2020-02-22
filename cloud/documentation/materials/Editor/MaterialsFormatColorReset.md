# MaterialsFormatColorReset
```text
elements/materials/Editor/MaterialsFormatColorReset
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatColorReset icon](../../../icons/materials/Editor/MaterialsFormatColorReset.png) | ![MaterialsFormatColorReset element](MaterialsFormatColorReset.element.png) | ![MaterialsFormatColorReset card](MaterialsFormatColorReset.card.png) |
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

' loads the MaterialsFormatColorReset element
include('elements/materials/Editor/MaterialsFormatColorReset')
MaterialsFormatColorReset('element', 'Format Color Reset', 'an optional tech field')
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

' loads the MaterialsFormatColorReset element
include('elements/materials/Editor/MaterialsFormatColorReset')
MaterialsFormatColorReset('element', 'Format Color Reset', 'an optional tech field')
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

' loads the MaterialsFormatColorReset card
include('elements/materials/Editor/MaterialsFormatColorReset')
MaterialsFormatColorResetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatColorReset card
include('elements/materials/Editor/MaterialsFormatColorReset')
MaterialsFormatColorResetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
