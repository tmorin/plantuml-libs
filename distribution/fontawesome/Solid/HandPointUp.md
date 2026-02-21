# HandPointUp


```text
fontawesome/Solid/HandPointUp
```

```text
include('fontawesome/Solid/HandPointUp')
```



| Illustration | HandPointUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandPointUp.png) | ![illustration for HandPointUp](../../fontawesome/Solid/HandPointUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandPointUpXs>`
- `<$HandPointUpSm>`
- `<$HandPointUpMd>`
- `<$HandPointUpLg>`





## HandPointUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandPointUp
include('fontawesome/Solid/HandPointUp')

' renders the element
HandPointUp('HandPointUp', 'Hand Point Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandPointUp
include('fontawesome/Solid/HandPointUp')

' renders the element
HandPointUp('HandPointUp', 'Hand Point Up', 'an optional tech label', 'an optional description')
@enduml
```

