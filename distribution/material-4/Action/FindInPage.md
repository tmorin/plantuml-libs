# FindInPage


```text
material-4/Action/FindInPage
```

```text
include('material-4/Action/FindInPage')
```



| Illustration | FindInPage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/FindInPage.png) | ![illustration for FindInPage](../../material-4/Action/FindInPage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FindInPageXs>`
- `<$FindInPageSm>`
- `<$FindInPageMd>`
- `<$FindInPageLg>`





## FindInPage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FindInPage
include('material-4/Action/FindInPage')

' renders the element
FindInPage('FindInPage', 'Find In Page', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FindInPage
include('material-4/Action/FindInPage')

' renders the element
FindInPage('FindInPage', 'Find In Page', 'an optional tech label', 'an optional description')
@enduml
```

