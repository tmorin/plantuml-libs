# _8KPlus


```text
material-4/Av/_8KPlus
```

```text
include('material-4/Av/_8KPlus')
```



| Illustration | _8KPlus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/_8KPlus.png) | ![illustration for _8KPlus](../../material-4/Av/_8KPlus.Local.png) |




## _8KPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _8KPlus
include('material-4/Av/_8KPlus')

' renders the element
_8KPlus('8kPlus', '8k Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _8KPlus
include('material-4/Av/_8KPlus')

' renders the element
_8KPlus('8kPlus', '8k Plus', 'an optional tech label', 'an optional description')
@enduml
```

