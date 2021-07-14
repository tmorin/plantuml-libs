# _1KPlus


```text
material-4/Av/_1KPlus
```

```text
include('material-4/Av/_1KPlus')
```



| Illustration | _1KPlus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/_1KPlus.png) | ![illustration for _1KPlus](../../material-4/Av/_1KPlus.Local.png) |




## _1KPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _1KPlus
include('material-4/Av/_1KPlus')

' renders the element
_1KPlus('1kPlus', '1k Plus', 'an optional tech label')
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

' loads the Item which embeds the element _1KPlus
include('material-4/Av/_1KPlus')

' renders the element
_1KPlus('1kPlus', '1k Plus', 'an optional tech label')
@enduml
```

