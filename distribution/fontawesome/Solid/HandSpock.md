# HandSpock


```text
fontawesome/Solid/HandSpock
```

```text
include('fontawesome/Solid/HandSpock')
```



| Illustration | HandSpock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandSpock.png) | ![illustration for HandSpock](../../fontawesome/Solid/HandSpock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandSpockXs>`
- `<$HandSpockSm>`
- `<$HandSpockMd>`
- `<$HandSpockLg>`





## HandSpock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandSpock
include('fontawesome/Solid/HandSpock')

' renders the element
HandSpock('HandSpock', 'Hand Spock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandSpock
include('fontawesome/Solid/HandSpock')

' renders the element
HandSpock('HandSpock', 'Hand Spock', 'an optional tech label', 'an optional description')
@enduml
```

