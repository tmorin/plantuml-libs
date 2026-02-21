# BackwardFast


```text
fontawesome/Solid/BackwardFast
```

```text
include('fontawesome/Solid/BackwardFast')
```



| Illustration | BackwardFast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BackwardFast.png) | ![illustration for BackwardFast](../../fontawesome/Solid/BackwardFast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackwardFastXs>`
- `<$BackwardFastSm>`
- `<$BackwardFastMd>`
- `<$BackwardFastLg>`





## BackwardFast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BackwardFast
include('fontawesome/Solid/BackwardFast')

' renders the element
BackwardFast('BackwardFast', 'Backward Fast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BackwardFast
include('fontawesome/Solid/BackwardFast')

' renders the element
BackwardFast('BackwardFast', 'Backward Fast', 'an optional tech label', 'an optional description')
@enduml
```

