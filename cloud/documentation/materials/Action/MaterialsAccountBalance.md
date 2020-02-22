# MaterialsAccountBalance
```text
elements/materials/Action/MaterialsAccountBalance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAccountBalance icon](../../../icons/materials/Action/MaterialsAccountBalance.png) | ![MaterialsAccountBalance element](MaterialsAccountBalance.element.png) | ![MaterialsAccountBalance card](MaterialsAccountBalance.card.png) |
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

' loads the MaterialsAccountBalance element
include('elements/materials/Action/MaterialsAccountBalance')
MaterialsAccountBalance('element', 'Account Balance', 'an optional tech field')
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

' loads the MaterialsAccountBalance element
include('elements/materials/Action/MaterialsAccountBalance')
MaterialsAccountBalance('element', 'Account Balance', 'an optional tech field')
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

' loads the MaterialsAccountBalance card
include('elements/materials/Action/MaterialsAccountBalance')
MaterialsAccountBalanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAccountBalance card
include('elements/materials/Action/MaterialsAccountBalance')
MaterialsAccountBalanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
