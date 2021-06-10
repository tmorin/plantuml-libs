# GitSquare


```text
fontawesome-5/Brands/GitSquare
```

```text
include('fontawesome-5/Brands/GitSquare')
```



| Illustration | GitSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/GitSquare.png) | ![illustration for GitSquare](../../fontawesome-5/Brands/GitSquare.Local.png) |




## GitSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GitSquare
include('fontawesome-5/Brands/GitSquare')

' renders the element
GitSquare('GitSquare', 'Git Square', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GitSquare
include('fontawesome-5/Brands/GitSquare')

' renders the element
GitSquare('GitSquare', 'Git Square', 'an optional tech label')
@enduml
```

