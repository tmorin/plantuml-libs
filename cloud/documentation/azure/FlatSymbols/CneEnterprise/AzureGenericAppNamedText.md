# AzureGenericAppNamedText
```text
elements/azure/FlatSymbols/CneEnterprise/AzureGenericAppNamedText
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureGenericAppNamedText icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureGenericAppNamedText.png) | ![AzureGenericAppNamedText element](AzureGenericAppNamedText.element.png) | ![AzureGenericAppNamedText card](AzureGenericAppNamedText.card.png) |
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

' loads the AzureGenericAppNamedText element
include('elements/azure/FlatSymbols/CneEnterprise/AzureGenericAppNamedText')
AzureGenericAppNamedText('element', 'Generic App Named Text', 'an optional tech field')
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

' loads the AzureGenericAppNamedText element
include('elements/azure/FlatSymbols/CneEnterprise/AzureGenericAppNamedText')
AzureGenericAppNamedText('element', 'Generic App Named Text', 'an optional tech field')
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

' loads the AzureGenericAppNamedText card
include('elements/azure/FlatSymbols/CneEnterprise/AzureGenericAppNamedText')
AzureGenericAppNamedTextCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureGenericAppNamedText card
include('elements/azure/FlatSymbols/CneEnterprise/AzureGenericAppNamedText')
AzureGenericAppNamedTextCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
