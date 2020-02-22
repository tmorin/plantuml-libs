# MaterialsFormatAlignLeft
```text
elements/materials/Editor/MaterialsFormatAlignLeft
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatAlignLeft icon](../../../icons/materials/Editor/MaterialsFormatAlignLeft.png) | ![MaterialsFormatAlignLeft element](MaterialsFormatAlignLeft.element.png) | ![MaterialsFormatAlignLeft card](MaterialsFormatAlignLeft.card.png) |
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

' loads the MaterialsFormatAlignLeft element
include('elements/materials/Editor/MaterialsFormatAlignLeft')
MaterialsFormatAlignLeft('element', 'Format Align Left', 'an optional tech field')
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

' loads the MaterialsFormatAlignLeft element
include('elements/materials/Editor/MaterialsFormatAlignLeft')
MaterialsFormatAlignLeft('element', 'Format Align Left', 'an optional tech field')
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

' loads the MaterialsFormatAlignLeft card
include('elements/materials/Editor/MaterialsFormatAlignLeft')
MaterialsFormatAlignLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatAlignLeft card
include('elements/materials/Editor/MaterialsFormatAlignLeft')
MaterialsFormatAlignLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
