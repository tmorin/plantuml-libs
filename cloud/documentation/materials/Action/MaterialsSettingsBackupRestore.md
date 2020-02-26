# MaterialsSettingsBackupRestore
```text
elements/materials/Action/MaterialsSettingsBackupRestore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsBackupRestore icon](../../../icons/materials/Action/MaterialsSettingsBackupRestore.png) | ![MaterialsSettingsBackupRestore element](MaterialsSettingsBackupRestore.element.png) | ![MaterialsSettingsBackupRestore card](MaterialsSettingsBackupRestore.card.png) |
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

' loads the MaterialsSettingsBackupRestore element
include('elements/materials/Action/MaterialsSettingsBackupRestore')
MaterialsSettingsBackupRestore('element', 'Settings Backup Restore', 'an optional tech field')
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

' loads the MaterialsSettingsBackupRestore element
include('elements/materials/Action/MaterialsSettingsBackupRestore')
MaterialsSettingsBackupRestore('element', 'Settings Backup Restore', 'an optional tech field')
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

' loads the MaterialsSettingsBackupRestore card
include('elements/materials/Action/MaterialsSettingsBackupRestore')
MaterialsSettingsBackupRestoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSettingsBackupRestore card
include('elements/materials/Action/MaterialsSettingsBackupRestore')
MaterialsSettingsBackupRestoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
