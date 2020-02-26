# AzureContainerRegistries
```text
elements/azure/ContainerServiceColor/AzureContainerRegistries
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureContainerRegistries icon](../../../icons/azure/ContainerServiceColor/AzureContainerRegistries.png) | ![AzureContainerRegistries element](AzureContainerRegistries.element.png) | ![AzureContainerRegistries card](AzureContainerRegistries.card.png) |
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

' loads the AzureContainerRegistries element
include('elements/azure/ContainerServiceColor/AzureContainerRegistries')
AzureContainerRegistries('element', 'Container Registries', 'an optional tech field')
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

' loads the AzureContainerRegistries element
include('elements/azure/ContainerServiceColor/AzureContainerRegistries')
AzureContainerRegistries('element', 'Container Registries', 'an optional tech field')
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

' loads the AzureContainerRegistries card
include('elements/azure/ContainerServiceColor/AzureContainerRegistries')
AzureContainerRegistriesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureContainerRegistries card
include('elements/azure/ContainerServiceColor/AzureContainerRegistries')
AzureContainerRegistriesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
