# _3KPlus


```text
material-4/Av/_3KPlus
```

```text
include('material-4/Av/_3KPlus')
```



| Illustration | _3KPlus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/_3KPlus.png) | ![illustration for _3KPlus](../../material-4/Av/_3KPlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$_3KPlusXs>`
- `<$_3KPlusSm>`
- `<$_3KPlusMd>`
- `<$_3KPlusLg>`





## _3KPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _3KPlus
include('material-4/Av/_3KPlus')

' renders the element
_3KPlus('3kPlus', '3k Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _3KPlus
include('material-4/Av/_3KPlus')

' renders the element
_3KPlus('3kPlus', '3k Plus', 'an optional tech label', 'an optional description')
@enduml
```

