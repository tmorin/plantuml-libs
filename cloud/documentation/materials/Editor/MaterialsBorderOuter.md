# MaterialsBorderOuter
```text
elements/materials/Editor/MaterialsBorderOuter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBorderOuter icon](../../../icons/materials/Editor/MaterialsBorderOuter.png) | ![MaterialsBorderOuter element](MaterialsBorderOuter.element.png) | ![MaterialsBorderOuter card](MaterialsBorderOuter.card.png) |
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

' loads the MaterialsBorderOuter element
include('elements/materials/Editor/MaterialsBorderOuter')
MaterialsBorderOuter('element', 'Border Outer', 'an optional tech field')
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

' loads the MaterialsBorderOuter element
include('elements/materials/Editor/MaterialsBorderOuter')
MaterialsBorderOuter('element', 'Border Outer', 'an optional tech field')
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

' loads the MaterialsBorderOuter card
include('elements/materials/Editor/MaterialsBorderOuter')
MaterialsBorderOuterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBorderOuter card
include('elements/materials/Editor/MaterialsBorderOuter')
MaterialsBorderOuterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
