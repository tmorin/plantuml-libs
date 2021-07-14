# _6KPlus


```text
material-4/Av/_6KPlus
```

```text
include('material-4/Av/_6KPlus')
```



| Illustration | _6KPlus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/_6KPlus.png) | ![illustration for _6KPlus](../../material-4/Av/_6KPlus.Local.png) |




## _6KPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _6KPlus
include('material-4/Av/_6KPlus')

' renders the element
_6KPlus('6kPlus', '6k Plus', 'an optional tech label')
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

' loads the Item which embeds the element _6KPlus
include('material-4/Av/_6KPlus')

' renders the element
_6KPlus('6kPlus', '6k Plus', 'an optional tech label')
@enduml
```

