# AzureLogoPluralsightMono
```text
elements/azure/Companies/AzureLogoPluralsightMono
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureLogoPluralsightMono icon](../../../icons/azure/Companies/AzureLogoPluralsightMono.png) | ![AzureLogoPluralsightMono element](AzureLogoPluralsightMono.element.png) | ![AzureLogoPluralsightMono card](AzureLogoPluralsightMono.card.png) |
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

' loads the AzureLogoPluralsightMono element
include('elements/azure/Companies/AzureLogoPluralsightMono')
AzureLogoPluralsightMono('element', 'Logo Pluralsight Mono', 'an optional tech field')
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

' loads the AzureLogoPluralsightMono element
include('elements/azure/Companies/AzureLogoPluralsightMono')
AzureLogoPluralsightMono('element', 'Logo Pluralsight Mono', 'an optional tech field')
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

' loads the AzureLogoPluralsightMono card
include('elements/azure/Companies/AzureLogoPluralsightMono')
AzureLogoPluralsightMonoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureLogoPluralsightMono card
include('elements/azure/Companies/AzureLogoPluralsightMono')
AzureLogoPluralsightMonoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
