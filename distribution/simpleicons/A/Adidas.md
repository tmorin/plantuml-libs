# Adidas


```text
simpleicons/A/Adidas
```

```text
include('simpleicons/A/Adidas')
```



| Illustration | Adidas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Adidas.png) | ![illustration for Adidas](../../simpleicons/A/Adidas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdidasXs>`
- `<$AdidasSm>`
- `<$AdidasMd>`
- `<$AdidasLg>`





## Adidas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Adidas
include('simpleicons/A/Adidas')

' renders the element
Adidas('Adidas', 'Adidas', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Adidas
include('simpleicons/A/Adidas')

' renders the element
Adidas('Adidas', 'Adidas', 'an optional tech label', 'an optional description')
@enduml
```

