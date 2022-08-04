# GitSquare


```text
fontawesome-6/Brands/GitSquare
```

```text
include('fontawesome-6/Brands/GitSquare')
```



| Illustration | GitSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/GitSquare.png) | ![illustration for GitSquare](../../fontawesome-6/Brands/GitSquare.Local.png) |




## GitSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GitSquare
include('fontawesome-6/Brands/GitSquare')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GitSquare
include('fontawesome-6/Brands/GitSquare')

' renders the element
GitSquare('GitSquare', 'Git Square', 'an optional tech label', 'an optional description')
@enduml
```

