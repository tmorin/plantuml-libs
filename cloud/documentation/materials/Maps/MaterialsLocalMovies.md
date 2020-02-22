# MaterialsLocalMovies
```text
elements/materials/Maps/MaterialsLocalMovies
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalMovies icon](../../../icons/materials/Maps/MaterialsLocalMovies.png) | ![MaterialsLocalMovies element](MaterialsLocalMovies.element.png) | ![MaterialsLocalMovies card](MaterialsLocalMovies.card.png) |
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

' loads the MaterialsLocalMovies element
include('elements/materials/Maps/MaterialsLocalMovies')
MaterialsLocalMovies('element', 'Local Movies', 'an optional tech field')
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

' loads the MaterialsLocalMovies element
include('elements/materials/Maps/MaterialsLocalMovies')
MaterialsLocalMovies('element', 'Local Movies', 'an optional tech field')
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

' loads the MaterialsLocalMovies card
include('elements/materials/Maps/MaterialsLocalMovies')
MaterialsLocalMoviesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalMovies card
include('elements/materials/Maps/MaterialsLocalMovies')
MaterialsLocalMoviesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
