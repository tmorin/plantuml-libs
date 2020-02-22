# MaterialsFormatPaint
```text
elements/materials/Editor/MaterialsFormatPaint
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatPaint icon](../../../icons/materials/Editor/MaterialsFormatPaint.png) | ![MaterialsFormatPaint element](MaterialsFormatPaint.element.png) | ![MaterialsFormatPaint card](MaterialsFormatPaint.card.png) |
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

' loads the MaterialsFormatPaint element
include('elements/materials/Editor/MaterialsFormatPaint')
MaterialsFormatPaint('element', 'Format Paint', 'an optional tech field')
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

' loads the MaterialsFormatPaint element
include('elements/materials/Editor/MaterialsFormatPaint')
MaterialsFormatPaint('element', 'Format Paint', 'an optional tech field')
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

' loads the MaterialsFormatPaint card
include('elements/materials/Editor/MaterialsFormatPaint')
MaterialsFormatPaintCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatPaint card
include('elements/materials/Editor/MaterialsFormatPaint')
MaterialsFormatPaintCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
