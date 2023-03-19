# LastPage


```text
material-4/Navigation/LastPage
```

```text
include('material-4/Navigation/LastPage')
```



| Illustration | LastPage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/LastPage.png) | ![illustration for LastPage](../../material-4/Navigation/LastPage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LastPageXs>`
- `<$LastPageSm>`
- `<$LastPageMd>`
- `<$LastPageLg>`





## LastPage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LastPage
include('material-4/Navigation/LastPage')

' renders the element
LastPage('LastPage', 'Last Page', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LastPage
include('material-4/Navigation/LastPage')

' renders the element
LastPage('LastPage', 'Last Page', 'an optional tech label', 'an optional description')
@enduml
```

