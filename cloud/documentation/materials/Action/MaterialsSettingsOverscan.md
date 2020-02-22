# MaterialsSettingsOverscan
```text
elements/materials/Action/MaterialsSettingsOverscan
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsOverscan icon](../../../icons/materials/Action/MaterialsSettingsOverscan.png) | ![MaterialsSettingsOverscan element](MaterialsSettingsOverscan.element.png) | ![MaterialsSettingsOverscan card](MaterialsSettingsOverscan.card.png) |
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

' loads the MaterialsSettingsOverscan element
include('elements/materials/Action/MaterialsSettingsOverscan')
MaterialsSettingsOverscan('element', 'Settings Overscan', 'an optional tech field')
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

' loads the MaterialsSettingsOverscan element
include('elements/materials/Action/MaterialsSettingsOverscan')
MaterialsSettingsOverscan('element', 'Settings Overscan', 'an optional tech field')
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

' loads the MaterialsSettingsOverscan card
include('elements/materials/Action/MaterialsSettingsOverscan')
MaterialsSettingsOverscanCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsOverscan card
include('elements/materials/Action/MaterialsSettingsOverscan')
MaterialsSettingsOverscanCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
