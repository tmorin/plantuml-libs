# MaterialsAccountBalanceWallet
```text
elements/materials/Action/MaterialsAccountBalanceWallet
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAccountBalanceWallet icon](../../../icons/materials/Action/MaterialsAccountBalanceWallet.png) | ![MaterialsAccountBalanceWallet element](MaterialsAccountBalanceWallet.element.png) | ![MaterialsAccountBalanceWallet card](MaterialsAccountBalanceWallet.card.png) |
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
include('styles/materials')

' loads the MaterialsAccountBalanceWallet element
include('elements/materials/Action/MaterialsAccountBalanceWallet')
MaterialsAccountBalanceWallet('element', 'Account Balance Wallet', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsAccountBalanceWallet element
include('elements/materials/Action/MaterialsAccountBalanceWallet')
MaterialsAccountBalanceWallet('element', 'Account Balance Wallet', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsAccountBalanceWallet card
include('elements/materials/Action/MaterialsAccountBalanceWallet')
MaterialsAccountBalanceWalletCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/materials')

' loads the MaterialsAccountBalanceWallet card
include('elements/materials/Action/MaterialsAccountBalanceWallet')
MaterialsAccountBalanceWalletCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
