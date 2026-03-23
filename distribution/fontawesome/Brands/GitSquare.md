# GitSquare


```text
fontawesome/Brands/GitSquare
```

```text
include('fontawesome/Brands/GitSquare')
```



| Illustration | GitSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/GitSquare.png) | ![illustration for GitSquare](../../fontawesome/Brands/GitSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GitSquareXs>`
- `<$GitSquareSm>`
- `<$GitSquareMd>`
- `<$GitSquareLg>`





## GitSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GitSquare
include('fontawesome/Brands/GitSquare')

' renders the element
GitSquare('GitSquare', 'Git Square', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element GitSquare
include('fontawesome/Brands/GitSquare')

' renders the element
GitSquare('GitSquare', 'Git Square', 'an optional tech label', 'an optional description')
@enduml
```

