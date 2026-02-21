# Ton


```text
simpleicons/T/Ton
```

```text
include('simpleicons/T/Ton')
```



| Illustration | Ton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Ton.png) | ![illustration for Ton](../../simpleicons/T/Ton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TonXs>`
- `<$TonSm>`
- `<$TonMd>`
- `<$TonLg>`





## Ton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ton
include('simpleicons/T/Ton')

' renders the element
Ton('Ton', 'Ton', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ton
include('simpleicons/T/Ton')

' renders the element
Ton('Ton', 'Ton', 'an optional tech label', 'an optional description')
@enduml
```

