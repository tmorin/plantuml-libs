# Category


```text
material-4/Maps/Category
```

```text
include('material-4/Maps/Category')
```



| Illustration | Category |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Category.png) | ![illustration for Category](../../material-4/Maps/Category.Local.png) |




## Category

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Category
include('material-4/Maps/Category')

' renders the element
Category('Category', 'Category', 'an optional tech label')
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

' loads the Item which embeds the element Category
include('material-4/Maps/Category')

' renders the element
Category('Category', 'Category', 'an optional tech label')
@enduml
```

