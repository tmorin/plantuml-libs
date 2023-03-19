# BackwardFast


```text
fontawesome-6/Solid/BackwardFast
```

```text
include('fontawesome-6/Solid/BackwardFast')
```



| Illustration | BackwardFast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BackwardFast.png) | ![illustration for BackwardFast](../../fontawesome-6/Solid/BackwardFast.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BackwardFast
include('fontawesome-6/Solid/BackwardFast')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BackwardFast
include('fontawesome-6/Solid/BackwardFast')

' renders the element
BackwardFast('BackwardFast', 'Backward Fast', 'an optional tech label', 'an optional description')
@enduml
```

