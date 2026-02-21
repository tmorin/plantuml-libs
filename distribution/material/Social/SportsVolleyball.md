# SportsVolleyball


```text
material/Social/SportsVolleyball
```

```text
include('material/Social/SportsVolleyball')
```



| Illustration | SportsVolleyball |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SportsVolleyball.png) | ![illustration for SportsVolleyball](../../material/Social/SportsVolleyball.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsVolleyballXs>`
- `<$SportsVolleyballSm>`
- `<$SportsVolleyballMd>`
- `<$SportsVolleyballLg>`





## SportsVolleyball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SportsVolleyball
include('material/Social/SportsVolleyball')

' renders the element
SportsVolleyball('SportsVolleyball', 'Sports Volleyball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsVolleyball
include('material/Social/SportsVolleyball')

' renders the element
SportsVolleyball('SportsVolleyball', 'Sports Volleyball', 'an optional tech label', 'an optional description')
@enduml
```

