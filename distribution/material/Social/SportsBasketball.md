# SportsBasketball


```text
material/Social/SportsBasketball
```

```text
include('material/Social/SportsBasketball')
```



| Illustration | SportsBasketball |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SportsBasketball.png) | ![illustration for SportsBasketball](../../material/Social/SportsBasketball.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsBasketballXs>`
- `<$SportsBasketballSm>`
- `<$SportsBasketballMd>`
- `<$SportsBasketballLg>`





## SportsBasketball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SportsBasketball
include('material/Social/SportsBasketball')

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
include('material/bootstrap')

' loads the Item which embeds the element SportsBasketball
include('material/Social/SportsBasketball')

' renders the element
SportsBasketball('SportsBasketball', 'Sports Basketball', 'an optional tech label', 'an optional description')
@enduml
```

