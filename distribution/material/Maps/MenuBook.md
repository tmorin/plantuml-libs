# MenuBook


```text
material/Maps/MenuBook
```

```text
include('material/Maps/MenuBook')
```



| Illustration | MenuBook |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/MenuBook.png) | ![illustration for MenuBook](../../material/Maps/MenuBook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MenuBookXs>`
- `<$MenuBookSm>`
- `<$MenuBookMd>`
- `<$MenuBookLg>`





## MenuBook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MenuBook
include('material/Maps/MenuBook')

' renders the element
MenuBook('MenuBook', 'Menu Book', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MenuBook
include('material/Maps/MenuBook')

' renders the element
MenuBook('MenuBook', 'Menu Book', 'an optional tech label', 'an optional description')
@enduml
```

