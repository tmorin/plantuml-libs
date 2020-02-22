# MaterialsSettingsPhone
```text
elements/materials/Action/MaterialsSettingsPhone
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsPhone icon](../../../icons/materials/Action/MaterialsSettingsPhone.png) | ![MaterialsSettingsPhone element](MaterialsSettingsPhone.element.png) | ![MaterialsSettingsPhone card](MaterialsSettingsPhone.card.png) |
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

' loads the MaterialsSettingsPhone element
include('elements/materials/Action/MaterialsSettingsPhone')
MaterialsSettingsPhone('element', 'Settings Phone', 'an optional tech field')
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

' loads the MaterialsSettingsPhone element
include('elements/materials/Action/MaterialsSettingsPhone')
MaterialsSettingsPhone('element', 'Settings Phone', 'an optional tech field')
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

' loads the MaterialsSettingsPhone card
include('elements/materials/Action/MaterialsSettingsPhone')
MaterialsSettingsPhoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsPhone card
include('elements/materials/Action/MaterialsSettingsPhone')
MaterialsSettingsPhoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
