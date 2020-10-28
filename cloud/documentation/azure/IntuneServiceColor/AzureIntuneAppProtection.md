# AzureIntuneAppProtection
```text
elements/azure/IntuneServiceColor/AzureIntuneAppProtection
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureIntuneAppProtection icon](../../../icons/azure/IntuneServiceColor/AzureIntuneAppProtection.png) | ![AzureIntuneAppProtection element](AzureIntuneAppProtection.element.png) | ![AzureIntuneAppProtection card](AzureIntuneAppProtection.card.png) |
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
include('styles/azure')

' loads the AzureIntuneAppProtection element
include('elements/azure/IntuneServiceColor/AzureIntuneAppProtection')
AzureIntuneAppProtection('element', 'Intune App Protection', 'an optional tech field')
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

' loads the AzureIntuneAppProtection element
include('elements/azure/IntuneServiceColor/AzureIntuneAppProtection')
AzureIntuneAppProtection('element', 'Intune App Protection', 'an optional tech field')
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
include('styles/azure')

' loads the AzureIntuneAppProtection card
include('elements/azure/IntuneServiceColor/AzureIntuneAppProtection')
AzureIntuneAppProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureIntuneAppProtection card
include('elements/azure/IntuneServiceColor/AzureIntuneAppProtection')
AzureIntuneAppProtectionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
