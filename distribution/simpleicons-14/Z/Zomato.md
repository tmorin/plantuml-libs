# Zomato


```text
simpleicons-14/Z/Zomato
```

```text
include('simpleicons-14/Z/Zomato')
```



| Illustration | Zomato |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zomato.png) | ![illustration for Zomato](../../simpleicons-14/Z/Zomato.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZomatoXs>`
- `<$ZomatoSm>`
- `<$ZomatoMd>`
- `<$ZomatoLg>`





## Zomato

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zomato
include('simpleicons-14/Z/Zomato')

' renders the element
Zomato('Zomato', 'Zomato', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zomato
include('simpleicons-14/Z/Zomato')

' renders the element
Zomato('Zomato', 'Zomato', 'an optional tech label', 'an optional description')
@enduml
```

