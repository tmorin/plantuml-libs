# AzureOpenshift
```text
elements/azure/Companies/AzureOpenshift
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureOpenshift icon](../../../icons/azure/Companies/AzureOpenshift.png) | ![AzureOpenshift element](AzureOpenshift.element.png) | ![AzureOpenshift card](AzureOpenshift.card.png) |
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

' loads the AzureOpenshift element
include('elements/azure/Companies/AzureOpenshift')
AzureOpenshift('element', 'Openshift', 'an optional tech field')
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

' loads the AzureOpenshift element
include('elements/azure/Companies/AzureOpenshift')
AzureOpenshift('element', 'Openshift', 'an optional tech field')
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

' loads the AzureOpenshift card
include('elements/azure/Companies/AzureOpenshift')
AzureOpenshiftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureOpenshift card
include('elements/azure/Companies/AzureOpenshift')
AzureOpenshiftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
