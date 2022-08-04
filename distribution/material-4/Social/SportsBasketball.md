# SportsBasketball


```text
material-4/Social/SportsBasketball
```

```text
include('material-4/Social/SportsBasketball')
```



| Illustration | SportsBasketball |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsBasketball.png) | ![illustration for SportsBasketball](../../material-4/Social/SportsBasketball.Local.png) |




## SportsBasketball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsBasketball
include('material-4/Social/SportsBasketball')

' renders the element
SportsBasketball('SportsBasketball', 'Sports Basketball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsBasketball
include('material-4/Social/SportsBasketball')

' renders the element
SportsBasketball('SportsBasketball', 'Sports Basketball', 'an optional tech label', 'an optional description')
@enduml
```

