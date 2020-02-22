# MaterialsBorderInner
```text
elements/materials/Editor/MaterialsBorderInner
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBorderInner icon](../../../icons/materials/Editor/MaterialsBorderInner.png) | ![MaterialsBorderInner element](MaterialsBorderInner.element.png) | ![MaterialsBorderInner card](MaterialsBorderInner.card.png) |
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

' loads the MaterialsBorderInner element
include('elements/materials/Editor/MaterialsBorderInner')
MaterialsBorderInner('element', 'Border Inner', 'an optional tech field')
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

' loads the MaterialsBorderInner element
include('elements/materials/Editor/MaterialsBorderInner')
MaterialsBorderInner('element', 'Border Inner', 'an optional tech field')
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

' loads the MaterialsBorderInner card
include('elements/materials/Editor/MaterialsBorderInner')
MaterialsBorderInnerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBorderInner card
include('elements/materials/Editor/MaterialsBorderInner')
MaterialsBorderInnerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
