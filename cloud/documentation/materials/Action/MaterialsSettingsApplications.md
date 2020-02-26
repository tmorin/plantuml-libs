# MaterialsSettingsApplications
```text
elements/materials/Action/MaterialsSettingsApplications
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsApplications icon](../../../icons/materials/Action/MaterialsSettingsApplications.png) | ![MaterialsSettingsApplications element](MaterialsSettingsApplications.element.png) | ![MaterialsSettingsApplications card](MaterialsSettingsApplications.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsSettingsApplications element
include('elements/materials/Action/MaterialsSettingsApplications')
MaterialsSettingsApplications('element', 'Settings Applications', 'an optional tech field')
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

' loads the style
include('styles/materials')

' loads the MaterialsSettingsApplications element
include('elements/materials/Action/MaterialsSettingsApplications')
MaterialsSettingsApplications('element', 'Settings Applications', 'an optional tech field')
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

' loads the style
include('styles/materials')

' loads the MaterialsSettingsApplications card
include('elements/materials/Action/MaterialsSettingsApplications')
MaterialsSettingsApplicationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/materials')

' loads the MaterialsSettingsApplications card
include('elements/materials/Action/MaterialsSettingsApplications')
MaterialsSettingsApplicationsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
