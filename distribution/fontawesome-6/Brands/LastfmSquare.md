# LastfmSquare


```text
fontawesome-6/Brands/LastfmSquare
```

```text
include('fontawesome-6/Brands/LastfmSquare')
```



| Illustration | LastfmSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/LastfmSquare.png) | ![illustration for LastfmSquare](../../fontawesome-6/Brands/LastfmSquare.Local.png) |




## LastfmSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LastfmSquare
include('fontawesome-6/Brands/LastfmSquare')

' renders the element
LastfmSquare('LastfmSquare', 'Lastfm Square', 'an optional tech label')
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

' loads the Item which embeds the element LastfmSquare
include('fontawesome-6/Brands/LastfmSquare')

' renders the element
LastfmSquare('LastfmSquare', 'Lastfm Square', 'an optional tech label')
@enduml
```

