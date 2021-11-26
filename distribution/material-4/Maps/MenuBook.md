# MenuBook


```text
material-4/Maps/MenuBook
```

```text
include('material-4/Maps/MenuBook')
```



| Illustration | MenuBook |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/MenuBook.png) | ![illustration for MenuBook](../../material-4/Maps/MenuBook.Local.png) |




## MenuBook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MenuBook
include('material-4/Maps/MenuBook')

' renders the element
MenuBook('MenuBook', 'Menu Book', 'an optional tech label')
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

' loads the Item which embeds the element MenuBook
include('material-4/Maps/MenuBook')

' renders the element
MenuBook('MenuBook', 'Menu Book', 'an optional tech label')
@enduml
```

