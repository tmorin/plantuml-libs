# Tv4Play


```text
simpleicons/T/Tv4Play
```

```text
include('simpleicons/T/Tv4Play')
```



| Illustration | Tv4Play |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tv4Play.png) | ![illustration for Tv4Play](../../simpleicons/T/Tv4Play.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Tv4PlayXs>`
- `<$Tv4PlaySm>`
- `<$Tv4PlayMd>`
- `<$Tv4PlayLg>`





## Tv4Play

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tv4Play
include('simpleicons/T/Tv4Play')

' renders the element
Tv4Play('Tv4Play', 'Tv4 Play', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tv4Play
include('simpleicons/T/Tv4Play')

' renders the element
Tv4Play('Tv4Play', 'Tv4 Play', 'an optional tech label', 'an optional description')
@enduml
```

