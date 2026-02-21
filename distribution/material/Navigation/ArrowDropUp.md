# ArrowDropUp


```text
material/Navigation/ArrowDropUp
```

```text
include('material/Navigation/ArrowDropUp')
```



| Illustration | ArrowDropUp |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/ArrowDropUp.png) | ![illustration for ArrowDropUp](../../material/Navigation/ArrowDropUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowDropUpXs>`
- `<$ArrowDropUpSm>`
- `<$ArrowDropUpMd>`
- `<$ArrowDropUpLg>`





## ArrowDropUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ArrowDropUp
include('material/Navigation/ArrowDropUp')

' renders the element
ArrowDropUp('ArrowDropUp', 'Arrow Drop Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowDropUp
include('material/Navigation/ArrowDropUp')

' renders the element
ArrowDropUp('ArrowDropUp', 'Arrow Drop Up', 'an optional tech label', 'an optional description')
@enduml
```

