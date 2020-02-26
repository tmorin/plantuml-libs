# AzureAdIdentityProtection
```text
elements/azure/IdentityServiceColor/AzureAdIdentityProtection
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAdIdentityProtection icon](../../../icons/azure/IdentityServiceColor/AzureAdIdentityProtection.png) | ![AzureAdIdentityProtection element](AzureAdIdentityProtection.element.png) | ![AzureAdIdentityProtection card](AzureAdIdentityProtection.card.png) |
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

' loads the AzureAdIdentityProtection element
include('elements/azure/IdentityServiceColor/AzureAdIdentityProtection')
AzureAdIdentityProtection('element', 'Ad Identity Protection', 'an optional tech field')
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

' loads the AzureAdIdentityProtection element
include('elements/azure/IdentityServiceColor/AzureAdIdentityProtection')
AzureAdIdentityProtection('element', 'Ad Identity Protection', 'an optional tech field')
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

' loads the AzureAdIdentityProtection card
include('elements/azure/IdentityServiceColor/AzureAdIdentityProtection')
AzureAdIdentityProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAdIdentityProtection card
include('elements/azure/IdentityServiceColor/AzureAdIdentityProtection')
AzureAdIdentityProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
