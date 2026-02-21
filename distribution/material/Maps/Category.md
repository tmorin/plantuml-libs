# Category


```text
material/Maps/Category
```

```text
include('material/Maps/Category')
```



| Illustration | Category |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Category.png) | ![illustration for Category](../../material/Maps/Category.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CategoryXs>`
- `<$CategorySm>`
- `<$CategoryMd>`
- `<$CategoryLg>`





## Category

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Category
include('material/Maps/Category')

' renders the element
Category('Category', 'Category', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Category
include('material/Maps/Category')

' renders the element
Category('Category', 'Category', 'an optional tech label', 'an optional description')
@enduml
```

