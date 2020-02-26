# AwsIotCart
```text
elements/aws/InternetOfThings/AwsIotCart
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotCart icon](../../../icons/aws/InternetOfThings/AwsIotCart.png) | ![AwsIotCart element](AwsIotCart.element.png) | ![AwsIotCart card](AwsIotCart.card.png) |
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
include('styles/aws')

' loads the AwsIotCart element
include('elements/aws/InternetOfThings/AwsIotCart')
AwsIotCart('element', 'Iot Cart', 'an optional tech field')
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
include('styles/aws')

' loads the AwsIotCart element
include('elements/aws/InternetOfThings/AwsIotCart')
AwsIotCart('element', 'Iot Cart', 'an optional tech field')
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
include('styles/aws')

' loads the AwsIotCart card
include('elements/aws/InternetOfThings/AwsIotCart')
AwsIotCartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/aws')

' loads the AwsIotCart card
include('elements/aws/InternetOfThings/AwsIotCart')
AwsIotCartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
