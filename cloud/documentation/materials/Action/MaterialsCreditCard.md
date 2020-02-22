# MaterialsCreditCard
```text
elements/materials/Action/MaterialsCreditCard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCreditCard icon](../../../icons/materials/Action/MaterialsCreditCard.png) | ![MaterialsCreditCard element](MaterialsCreditCard.element.png) | ![MaterialsCreditCard card](MaterialsCreditCard.card.png) |
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

' loads the MaterialsCreditCard element
include('elements/materials/Action/MaterialsCreditCard')
MaterialsCreditCard('element', 'Credit Card', 'an optional tech field')
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

' loads the MaterialsCreditCard element
include('elements/materials/Action/MaterialsCreditCard')
MaterialsCreditCard('element', 'Credit Card', 'an optional tech field')
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

' loads the MaterialsCreditCard card
include('elements/materials/Action/MaterialsCreditCard')
MaterialsCreditCardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCreditCard card
include('elements/materials/Action/MaterialsCreditCard')
MaterialsCreditCardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
