# Abletonlive


```text
simpleicons-14/A/Abletonlive
```

```text
include('simpleicons-14/A/Abletonlive')
```



| Illustration | Abletonlive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Abletonlive.png) | ![illustration for Abletonlive](../../simpleicons-14/A/Abletonlive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AbletonliveXs>`
- `<$AbletonliveSm>`
- `<$AbletonliveMd>`
- `<$AbletonliveLg>`





## Abletonlive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Abletonlive
include('simpleicons-14/A/Abletonlive')

' renders the element
Abletonlive('Abletonlive', 'Abletonlive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Abletonlive
include('simpleicons-14/A/Abletonlive')

' renders the element
Abletonlive('Abletonlive', 'Abletonlive', 'an optional tech label', 'an optional description')
@enduml
```

