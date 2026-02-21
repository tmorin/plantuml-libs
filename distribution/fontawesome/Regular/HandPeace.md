# HandPeace


```text
fontawesome/Regular/HandPeace
```

```text
include('fontawesome/Regular/HandPeace')
```



| Illustration | HandPeace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HandPeace.png) | ![illustration for HandPeace](../../fontawesome/Regular/HandPeace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandPeaceXs>`
- `<$HandPeaceSm>`
- `<$HandPeaceMd>`
- `<$HandPeaceLg>`





## HandPeace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandPeace
include('fontawesome/Regular/HandPeace')

' renders the element
HandPeace('HandPeace', 'Hand Peace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandPeace
include('fontawesome/Regular/HandPeace')

' renders the element
HandPeace('HandPeace', 'Hand Peace', 'an optional tech label', 'an optional description')
@enduml
```

