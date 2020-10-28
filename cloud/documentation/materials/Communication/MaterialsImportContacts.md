# MaterialsImportContacts
```text
elements/materials/Communication/MaterialsImportContacts
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsImportContacts icon](../../../icons/materials/Communication/MaterialsImportContacts.png) | ![MaterialsImportContacts element](MaterialsImportContacts.element.png) | ![MaterialsImportContacts card](MaterialsImportContacts.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsImportContacts element
include('elements/materials/Communication/MaterialsImportContacts')
MaterialsImportContacts('element', 'Import Contacts', 'an optional tech field')
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

' loads the MaterialsImportContacts element
include('elements/materials/Communication/MaterialsImportContacts')
MaterialsImportContacts('element', 'Import Contacts', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsImportContacts card
include('elements/materials/Communication/MaterialsImportContacts')
MaterialsImportContactsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsImportContacts card
include('elements/materials/Communication/MaterialsImportContacts')
MaterialsImportContactsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
