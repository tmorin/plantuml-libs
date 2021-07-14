# ShopTwo


```text
material-4/Action/ShopTwo
```

```text
include('material-4/Action/ShopTwo')
```



| Illustration | ShopTwo |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ShopTwo.png) | ![illustration for ShopTwo](../../material-4/Action/ShopTwo.Local.png) |




## ShopTwo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ShopTwo
include('material-4/Action/ShopTwo')

' renders the element
ShopTwo('ShopTwo', 'Shop Two', 'an optional tech label')
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

' loads the Item which embeds the element ShopTwo
include('material-4/Action/ShopTwo')

' renders the element
ShopTwo('ShopTwo', 'Shop Two', 'an optional tech label')
@enduml
```

