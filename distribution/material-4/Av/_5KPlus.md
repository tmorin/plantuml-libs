# _5KPlus


```text
material-4/Av/_5KPlus
```

```text
include('material-4/Av/_5KPlus')
```



| Illustration | _5KPlus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/_5KPlus.png) | ![illustration for _5KPlus](../../material-4/Av/_5KPlus.Local.png) |




## _5KPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _5KPlus
include('material-4/Av/_5KPlus')

' renders the element
_5KPlus('5kPlus', '5k Plus', 'an optional tech label')
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

' loads the Item which embeds the element _5KPlus
include('material-4/Av/_5KPlus')

' renders the element
_5KPlus('5kPlus', '5k Plus', 'an optional tech label')
@enduml
```

