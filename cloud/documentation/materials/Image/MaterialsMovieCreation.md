# MaterialsMovieCreation
```text
elements/materials/Image/MaterialsMovieCreation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMovieCreation icon](../../../icons/materials/Image/MaterialsMovieCreation.png) | ![MaterialsMovieCreation element](MaterialsMovieCreation.element.png) | ![MaterialsMovieCreation card](MaterialsMovieCreation.card.png) |
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

' loads the MaterialsMovieCreation element
include('elements/materials/Image/MaterialsMovieCreation')
MaterialsMovieCreation('element', 'Movie Creation', 'an optional tech field')
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

' loads the MaterialsMovieCreation element
include('elements/materials/Image/MaterialsMovieCreation')
MaterialsMovieCreation('element', 'Movie Creation', 'an optional tech field')
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

' loads the MaterialsMovieCreation card
include('elements/materials/Image/MaterialsMovieCreation')
MaterialsMovieCreationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsMovieCreation card
include('elements/materials/Image/MaterialsMovieCreation')
MaterialsMovieCreationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
