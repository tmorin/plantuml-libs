# LastfmSquare


```text
fontawesome/Brands/LastfmSquare
```

```text
include('fontawesome/Brands/LastfmSquare')
```



| Illustration | LastfmSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/LastfmSquare.png) | ![illustration for LastfmSquare](../../fontawesome/Brands/LastfmSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LastfmSquareXs>`
- `<$LastfmSquareSm>`
- `<$LastfmSquareMd>`
- `<$LastfmSquareLg>`





## LastfmSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LastfmSquare
include('fontawesome/Brands/LastfmSquare')

' renders the element
LastfmSquare('LastfmSquare', 'Lastfm Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LastfmSquare
include('fontawesome/Brands/LastfmSquare')

' renders the element
LastfmSquare('LastfmSquare', 'Lastfm Square', 'an optional tech label', 'an optional description')
@enduml
```

