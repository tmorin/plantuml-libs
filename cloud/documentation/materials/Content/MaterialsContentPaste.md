# MaterialsContentPaste
```text
elements/materials/Content/MaterialsContentPaste
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsContentPaste icon](../../../icons/materials/Content/MaterialsContentPaste.png) | ![MaterialsContentPaste element](MaterialsContentPaste.element.png) | ![MaterialsContentPaste card](MaterialsContentPaste.card.png) |
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

' loads the MaterialsContentPaste element
include('elements/materials/Content/MaterialsContentPaste')
MaterialsContentPaste('element', 'Content Paste', 'an optional tech field')
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

' loads the MaterialsContentPaste element
include('elements/materials/Content/MaterialsContentPaste')
MaterialsContentPaste('element', 'Content Paste', 'an optional tech field')
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

' loads the MaterialsContentPaste card
include('elements/materials/Content/MaterialsContentPaste')
MaterialsContentPasteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsContentPaste card
include('elements/materials/Content/MaterialsContentPaste')
MaterialsContentPasteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
