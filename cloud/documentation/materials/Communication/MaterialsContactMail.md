# MaterialsContactMail
```text
elements/materials/Communication/MaterialsContactMail
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsContactMail icon](../../../icons/materials/Communication/MaterialsContactMail.png) | ![MaterialsContactMail element](MaterialsContactMail.element.png) | ![MaterialsContactMail card](MaterialsContactMail.card.png) |
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

' loads the MaterialsContactMail element
include('elements/materials/Communication/MaterialsContactMail')
MaterialsContactMail('element', 'Contact Mail', 'an optional tech field')
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

' loads the MaterialsContactMail element
include('elements/materials/Communication/MaterialsContactMail')
MaterialsContactMail('element', 'Contact Mail', 'an optional tech field')
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

' loads the MaterialsContactMail card
include('elements/materials/Communication/MaterialsContactMail')
MaterialsContactMailCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsContactMail card
include('elements/materials/Communication/MaterialsContactMail')
MaterialsContactMailCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
