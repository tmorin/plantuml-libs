# AzureDataFactories
```text
elements/azure/AnalyticsServiceColor/AzureDataFactories
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDataFactories icon](../../../icons/azure/AnalyticsServiceColor/AzureDataFactories.png) | ![AzureDataFactories element](AzureDataFactories.element.png) | ![AzureDataFactories card](AzureDataFactories.card.png) |
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

' loads the AzureDataFactories element
include('elements/azure/AnalyticsServiceColor/AzureDataFactories')
AzureDataFactories('element', 'Data Factories', 'an optional tech field')
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

' loads the AzureDataFactories element
include('elements/azure/AnalyticsServiceColor/AzureDataFactories')
AzureDataFactories('element', 'Data Factories', 'an optional tech field')
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

' loads the AzureDataFactories card
include('elements/azure/AnalyticsServiceColor/AzureDataFactories')
AzureDataFactoriesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDataFactories card
include('elements/azure/AnalyticsServiceColor/AzureDataFactories')
AzureDataFactoriesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
