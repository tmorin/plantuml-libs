# MaterialsRecordVoiceOver
```text
elements/materials/Action/MaterialsRecordVoiceOver
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRecordVoiceOver icon](../../../icons/materials/Action/MaterialsRecordVoiceOver.png) | ![MaterialsRecordVoiceOver element](MaterialsRecordVoiceOver.element.png) | ![MaterialsRecordVoiceOver card](MaterialsRecordVoiceOver.card.png) |
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

' loads the MaterialsRecordVoiceOver element
include('elements/materials/Action/MaterialsRecordVoiceOver')
MaterialsRecordVoiceOver('element', 'Record Voice Over', 'an optional tech field')
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

' loads the MaterialsRecordVoiceOver element
include('elements/materials/Action/MaterialsRecordVoiceOver')
MaterialsRecordVoiceOver('element', 'Record Voice Over', 'an optional tech field')
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

' loads the MaterialsRecordVoiceOver card
include('elements/materials/Action/MaterialsRecordVoiceOver')
MaterialsRecordVoiceOverCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRecordVoiceOver card
include('elements/materials/Action/MaterialsRecordVoiceOver')
MaterialsRecordVoiceOverCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
