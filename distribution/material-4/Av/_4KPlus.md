# _4KPlus


```text
material-4/Av/_4KPlus
```

```text
include('material-4/Av/_4KPlus')
```



| Illustration | _4KPlus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/_4KPlus.png) | ![illustration for _4KPlus](../../material-4/Av/_4KPlus.Local.png) |




## _4KPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _4KPlus
include('material-4/Av/_4KPlus')

' renders the element
_4KPlus('4kPlus', '4k Plus', 'an optional tech label')
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

' loads the Item which embeds the element _4KPlus
include('material-4/Av/_4KPlus')

' renders the element
_4KPlus('4kPlus', '4k Plus', 'an optional tech label')
@enduml
```

