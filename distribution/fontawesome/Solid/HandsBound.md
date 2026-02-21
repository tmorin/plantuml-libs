# HandsBound


```text
fontawesome/Solid/HandsBound
```

```text
include('fontawesome/Solid/HandsBound')
```



| Illustration | HandsBound |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandsBound.png) | ![illustration for HandsBound](../../fontawesome/Solid/HandsBound.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandsBoundXs>`
- `<$HandsBoundSm>`
- `<$HandsBoundMd>`
- `<$HandsBoundLg>`





## HandsBound

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandsBound
include('fontawesome/Solid/HandsBound')

' renders the element
HandsBound('HandsBound', 'Hands Bound', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsBound
include('fontawesome/Solid/HandsBound')

' renders the element
HandsBound('HandsBound', 'Hands Bound', 'an optional tech label', 'an optional description')
@enduml
```

