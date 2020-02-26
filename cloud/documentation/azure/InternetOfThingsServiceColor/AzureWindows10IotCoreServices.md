# AzureWindows10IotCoreServices
```text
elements/azure/InternetOfThingsServiceColor/AzureWindows10IotCoreServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureWindows10IotCoreServices icon](../../../icons/azure/InternetOfThingsServiceColor/AzureWindows10IotCoreServices.png) | ![AzureWindows10IotCoreServices element](AzureWindows10IotCoreServices.element.png) | ![AzureWindows10IotCoreServices card](AzureWindows10IotCoreServices.card.png) |
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

' loads the AzureWindows10IotCoreServices element
include('elements/azure/InternetOfThingsServiceColor/AzureWindows10IotCoreServices')
AzureWindows10IotCoreServices('element', 'Windows10 Iot Core Services', 'an optional tech field')
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
include('styles/azure')

' loads the AzureWindows10IotCoreServices element
include('elements/azure/InternetOfThingsServiceColor/AzureWindows10IotCoreServices')
AzureWindows10IotCoreServices('element', 'Windows10 Iot Core Services', 'an optional tech field')
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

' loads the AzureWindows10IotCoreServices card
include('elements/azure/InternetOfThingsServiceColor/AzureWindows10IotCoreServices')
AzureWindows10IotCoreServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/azure')

' loads the AzureWindows10IotCoreServices card
include('elements/azure/InternetOfThingsServiceColor/AzureWindows10IotCoreServices')
AzureWindows10IotCoreServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
