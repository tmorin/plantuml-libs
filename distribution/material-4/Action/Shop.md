# Shop


```text
material-4/Action/Shop
```

```text
include('material-4/Action/Shop')
```



| Illustration | Shop |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Shop.png) | ![illustration for Shop](../../material-4/Action/Shop.Local.png) |




## Shop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Shop
include('material-4/Action/Shop')

' renders the element
Shop('Shop', 'Shop', 'an optional tech label')
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

' loads the Item which embeds the element Shop
include('material-4/Action/Shop')

' renders the element
Shop('Shop', 'Shop', 'an optional tech label')
@enduml
```

