# MaterialsSystemUpdateAlt
```text
elements/materials/Action/MaterialsSystemUpdateAlt
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSystemUpdateAlt icon](../../../icons/materials/Action/MaterialsSystemUpdateAlt.png) | ![MaterialsSystemUpdateAlt element](MaterialsSystemUpdateAlt.element.png) | ![MaterialsSystemUpdateAlt card](MaterialsSystemUpdateAlt.card.png) |
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

' loads the MaterialsSystemUpdateAlt element
include('elements/materials/Action/MaterialsSystemUpdateAlt')
MaterialsSystemUpdateAlt('element', 'System Update Alt', 'an optional tech field')
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

' loads the MaterialsSystemUpdateAlt element
include('elements/materials/Action/MaterialsSystemUpdateAlt')
MaterialsSystemUpdateAlt('element', 'System Update Alt', 'an optional tech field')
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

' loads the MaterialsSystemUpdateAlt card
include('elements/materials/Action/MaterialsSystemUpdateAlt')
MaterialsSystemUpdateAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSystemUpdateAlt card
include('elements/materials/Action/MaterialsSystemUpdateAlt')
MaterialsSystemUpdateAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
