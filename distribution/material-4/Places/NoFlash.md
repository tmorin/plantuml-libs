# NoFlash


```text
material-4/Places/NoFlash
```

```text
include('material-4/Places/NoFlash')
```



| Illustration | NoFlash |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/NoFlash.png) | ![illustration for NoFlash](../../material-4/Places/NoFlash.Local.png) |




## NoFlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoFlash
include('material-4/Places/NoFlash')

' renders the element
NoFlash('NoFlash', 'No Flash', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element NoFlash
include('material-4/Places/NoFlash')

' renders the element
NoFlash('NoFlash', 'No Flash', 'an optional tech label', 'an optional description')
@enduml
```

