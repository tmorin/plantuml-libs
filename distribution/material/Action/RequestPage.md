# RequestPage


```text
material/Action/RequestPage
```

```text
include('material/Action/RequestPage')
```



| Illustration | RequestPage |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/RequestPage.png) | ![illustration for RequestPage](../../material/Action/RequestPage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RequestPageXs>`
- `<$RequestPageSm>`
- `<$RequestPageMd>`
- `<$RequestPageLg>`





## RequestPage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RequestPage
include('material/Action/RequestPage')

' renders the element
RequestPage('RequestPage', 'Request Page', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element RequestPage
include('material/Action/RequestPage')

' renders the element
RequestPage('RequestPage', 'Request Page', 'an optional tech label', 'an optional description')
@enduml
```

