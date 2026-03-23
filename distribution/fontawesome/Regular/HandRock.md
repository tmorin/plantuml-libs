# HandRock


```text
fontawesome/Regular/HandRock
```

```text
include('fontawesome/Regular/HandRock')
```



| Illustration | HandRock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HandRock.png) | ![illustration for HandRock](../../fontawesome/Regular/HandRock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandRockXs>`
- `<$HandRockSm>`
- `<$HandRockMd>`
- `<$HandRockLg>`





## HandRock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandRock
include('fontawesome/Regular/HandRock')

' renders the element
HandRock('HandRock', 'Hand Rock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandRock
include('fontawesome/Regular/HandRock')

' renders the element
HandRock('HandRock', 'Hand Rock', 'an optional tech label', 'an optional description')
@enduml
```

