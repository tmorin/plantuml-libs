# AwsDynamodbAttribute
```text
elements/aws/Database/AwsDynamodbAttribute
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDynamodbAttribute icon](../../../icons/aws/Database/AwsDynamodbAttribute.png) | ![AwsDynamodbAttribute element](AwsDynamodbAttribute.element.png) | ![AwsDynamodbAttribute card](AwsDynamodbAttribute.card.png) |
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

' loads the AwsDynamodbAttribute element
include('elements/aws/Database/AwsDynamodbAttribute')
AwsDynamodbAttribute('element', 'Dynamodb Attribute', 'an optional tech field')
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

' loads the AwsDynamodbAttribute element
include('elements/aws/Database/AwsDynamodbAttribute')
AwsDynamodbAttribute('element', 'Dynamodb Attribute', 'an optional tech field')
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

' loads the AwsDynamodbAttribute card
include('elements/aws/Database/AwsDynamodbAttribute')
AwsDynamodbAttributeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDynamodbAttribute card
include('elements/aws/Database/AwsDynamodbAttribute')
AwsDynamodbAttributeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
