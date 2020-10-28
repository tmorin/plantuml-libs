# AwsCloud9Resource
```text
elements/aws/DeveloperTools/AwsCloud9Resource
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloud9Resource icon](../../../icons/aws/DeveloperTools/AwsCloud9Resource.png) | ![AwsCloud9Resource element](AwsCloud9Resource.element.png) | ![AwsCloud9Resource card](AwsCloud9Resource.card.png) |
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
include('styles/aws')

' loads the AwsCloud9Resource element
include('elements/aws/DeveloperTools/AwsCloud9Resource')
AwsCloud9Resource('element', 'Cloud9 Resource', 'an optional tech field')
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

' loads the AwsCloud9Resource element
include('elements/aws/DeveloperTools/AwsCloud9Resource')
AwsCloud9Resource('element', 'Cloud9 Resource', 'an optional tech field')
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
include('styles/aws')

' loads the AwsCloud9Resource card
include('elements/aws/DeveloperTools/AwsCloud9Resource')
AwsCloud9ResourceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloud9Resource card
include('elements/aws/DeveloperTools/AwsCloud9Resource')
AwsCloud9ResourceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
