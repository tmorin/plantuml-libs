# MaterialsSettingsCell
```text
elements/materials/Action/MaterialsSettingsCell
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsCell icon](../../../icons/materials/Action/MaterialsSettingsCell.png) | ![MaterialsSettingsCell element](MaterialsSettingsCell.element.png) | ![MaterialsSettingsCell card](MaterialsSettingsCell.card.png) |
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

' loads the MaterialsSettingsCell element
include('elements/materials/Action/MaterialsSettingsCell')
MaterialsSettingsCell('element', 'Settings Cell', 'an optional tech field')
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

' loads the MaterialsSettingsCell element
include('elements/materials/Action/MaterialsSettingsCell')
MaterialsSettingsCell('element', 'Settings Cell', 'an optional tech field')
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

' loads the MaterialsSettingsCell card
include('elements/materials/Action/MaterialsSettingsCell')
MaterialsSettingsCellCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsCell card
include('elements/materials/Action/MaterialsSettingsCell')
MaterialsSettingsCellCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
