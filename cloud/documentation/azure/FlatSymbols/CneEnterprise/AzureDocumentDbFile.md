# AzureDocumentDbFile
```text
elements/azure/FlatSymbols/CneEnterprise/AzureDocumentDbFile
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDocumentDbFile icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureDocumentDbFile.png) | ![AzureDocumentDbFile element](AzureDocumentDbFile.element.png) | ![AzureDocumentDbFile card](AzureDocumentDbFile.card.png) |
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

' loads the AzureDocumentDbFile element
include('elements/azure/FlatSymbols/CneEnterprise/AzureDocumentDbFile')
AzureDocumentDbFile('element', 'Document Db File', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureDocumentDbFile element
include('elements/azure/FlatSymbols/CneEnterprise/AzureDocumentDbFile')
AzureDocumentDbFile('element', 'Document Db File', 'an optional tech field')
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

' loads the AzureDocumentDbFile card
include('elements/azure/FlatSymbols/CneEnterprise/AzureDocumentDbFile')
AzureDocumentDbFileCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the GCP style
include('styles/gcp')

' loads the AzureDocumentDbFile card
include('elements/azure/FlatSymbols/CneEnterprise/AzureDocumentDbFile')
AzureDocumentDbFileCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
