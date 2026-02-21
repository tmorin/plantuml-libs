# MovieCreation


```text
material/Image/MovieCreation
```

```text
include('material/Image/MovieCreation')
```



| Illustration | MovieCreation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/MovieCreation.png) | ![illustration for MovieCreation](../../material/Image/MovieCreation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MovieCreationXs>`
- `<$MovieCreationSm>`
- `<$MovieCreationMd>`
- `<$MovieCreationLg>`





## MovieCreation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MovieCreation
include('material/Image/MovieCreation')

' renders the element
MovieCreation('MovieCreation', 'Movie Creation', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MovieCreation
include('material/Image/MovieCreation')

' renders the element
MovieCreation('MovieCreation', 'Movie Creation', 'an optional tech label', 'an optional description')
@enduml
```

