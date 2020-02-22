# MaterialsGTranslate
```text
elements/materials/Action/MaterialsGTranslate
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsGTranslate icon](../../../icons/materials/Action/MaterialsGTranslate.png) | ![MaterialsGTranslate element](MaterialsGTranslate.element.png) | ![MaterialsGTranslate card](MaterialsGTranslate.card.png) |
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

' loads the MaterialsGTranslate element
include('elements/materials/Action/MaterialsGTranslate')
MaterialsGTranslate('element', 'G Translate', 'an optional tech field')
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

' loads the MaterialsGTranslate element
include('elements/materials/Action/MaterialsGTranslate')
MaterialsGTranslate('element', 'G Translate', 'an optional tech field')
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

' loads the MaterialsGTranslate card
include('elements/materials/Action/MaterialsGTranslate')
MaterialsGTranslateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsGTranslate card
include('elements/materials/Action/MaterialsGTranslate')
MaterialsGTranslateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
