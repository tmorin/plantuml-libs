# CallMade


```text
material/Communication/CallMade
```

```text
include('material/Communication/CallMade')
```



| Illustration | CallMade |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/CallMade.png) | ![illustration for CallMade](../../material/Communication/CallMade.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CallMadeXs>`
- `<$CallMadeSm>`
- `<$CallMadeMd>`
- `<$CallMadeLg>`





## CallMade

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CallMade
include('material/Communication/CallMade')

' renders the element
CallMade('CallMade', 'Call Made', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CallMade
include('material/Communication/CallMade')

' renders the element
CallMade('CallMade', 'Call Made', 'an optional tech label', 'an optional description')
@enduml
```

