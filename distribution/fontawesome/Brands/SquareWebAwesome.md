# SquareWebAwesome


```text
fontawesome/Brands/SquareWebAwesome
```

```text
include('fontawesome/Brands/SquareWebAwesome')
```



| Illustration | SquareWebAwesome |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareWebAwesome.png) | ![illustration for SquareWebAwesome](../../fontawesome/Brands/SquareWebAwesome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareWebAwesomeXs>`
- `<$SquareWebAwesomeSm>`
- `<$SquareWebAwesomeMd>`
- `<$SquareWebAwesomeLg>`





## SquareWebAwesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareWebAwesome
include('fontawesome/Brands/SquareWebAwesome')

' renders the element
SquareWebAwesome('SquareWebAwesome', 'Square Web Awesome', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareWebAwesome
include('fontawesome/Brands/SquareWebAwesome')

' renders the element
SquareWebAwesome('SquareWebAwesome', 'Square Web Awesome', 'an optional tech label', 'an optional description')
@enduml
```

