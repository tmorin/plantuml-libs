# AzureAdB2c
```text
elements/azure/IdentityServiceColor/AzureAdB2c
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAdB2c icon](../../../icons/azure/IdentityServiceColor/AzureAdB2c.png) | ![AzureAdB2c element](AzureAdB2c.element.png) | ![AzureAdB2c card](AzureAdB2c.card.png) |
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

' loads the AzureAdB2c element
include('elements/azure/IdentityServiceColor/AzureAdB2c')
AzureAdB2c('element', 'Ad B2c', 'an optional tech field')
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

' loads the AzureAdB2c element
include('elements/azure/IdentityServiceColor/AzureAdB2c')
AzureAdB2c('element', 'Ad B2c', 'an optional tech field')
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

' loads the AzureAdB2c card
include('elements/azure/IdentityServiceColor/AzureAdB2c')
AzureAdB2cCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAdB2c card
include('elements/azure/IdentityServiceColor/AzureAdB2c')
AzureAdB2cCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
