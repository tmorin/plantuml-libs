# ExternalLinkSquare


```text
fontawesome/Solid/ExternalLinkSquare
```

```text
include('fontawesome/Solid/ExternalLinkSquare')
```



| Illustration | ExternalLinkSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ExternalLinkSquare.png) | ![illustration for ExternalLinkSquare](../../fontawesome/Solid/ExternalLinkSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExternalLinkSquareXs>`
- `<$ExternalLinkSquareSm>`
- `<$ExternalLinkSquareMd>`
- `<$ExternalLinkSquareLg>`





## ExternalLinkSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ExternalLinkSquare
include('fontawesome/Solid/ExternalLinkSquare')

' renders the element
ExternalLinkSquare('ExternalLinkSquare', 'External Link Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExternalLinkSquare
include('fontawesome/Solid/ExternalLinkSquare')

' renders the element
ExternalLinkSquare('ExternalLinkSquare', 'External Link Square', 'an optional tech label', 'an optional description')
@enduml
```

