# BookOnline


```text
material/Action/BookOnline
```

```text
include('material/Action/BookOnline')
```



| Illustration | BookOnline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/BookOnline.png) | ![illustration for BookOnline](../../material/Action/BookOnline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookOnlineXs>`
- `<$BookOnlineSm>`
- `<$BookOnlineMd>`
- `<$BookOnlineLg>`





## BookOnline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BookOnline
include('material/Action/BookOnline')

' renders the element
BookOnline('BookOnline', 'Book Online', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BookOnline
include('material/Action/BookOnline')

' renders the element
BookOnline('BookOnline', 'Book Online', 'an optional tech label', 'an optional description')
@enduml
```

