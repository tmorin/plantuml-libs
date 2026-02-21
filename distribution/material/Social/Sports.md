# Sports


```text
material/Social/Sports
```

```text
include('material/Social/Sports')
```



| Illustration | Sports |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Sports.png) | ![illustration for Sports](../../material/Social/Sports.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsXs>`
- `<$SportsSm>`
- `<$SportsMd>`
- `<$SportsLg>`





## Sports

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Sports
include('material/Social/Sports')

' renders the element
Sports('Sports', 'Sports', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sports
include('material/Social/Sports')

' renders the element
Sports('Sports', 'Sports', 'an optional tech label', 'an optional description')
@enduml
```

