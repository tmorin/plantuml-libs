# AzureMediaEncoding
```text
elements/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaEncoding
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMediaEncoding icon](../../../../icons/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaEncoding.png) | ![AzureMediaEncoding element](AzureMediaEncoding.element.png) | ![AzureMediaEncoding card](AzureMediaEncoding.card.png) |
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
include('styles/azure')

' loads the AzureMediaEncoding element
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaEncoding')
AzureMediaEncoding('element', 'Media Encoding', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureMediaEncoding element
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaEncoding')
AzureMediaEncoding('element', 'Media Encoding', 'an optional tech field')
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
include('styles/azure')

' loads the AzureMediaEncoding card
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaEncoding')
AzureMediaEncodingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/azure')

' loads the AzureMediaEncoding card
include('elements/azure/ManagementAndGovernanceServiceColor/Media/AzureMediaEncoding')
AzureMediaEncodingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
