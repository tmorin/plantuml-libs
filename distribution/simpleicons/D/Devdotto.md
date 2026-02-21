# Devdotto


```text
simpleicons/D/Devdotto
```

```text
include('simpleicons/D/Devdotto')
```



| Illustration | Devdotto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Devdotto.png) | ![illustration for Devdotto](../../simpleicons/D/Devdotto.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DevdottoXs>`
- `<$DevdottoSm>`
- `<$DevdottoMd>`
- `<$DevdottoLg>`





## Devdotto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Devdotto
include('simpleicons/D/Devdotto')

' renders the element
Devdotto('Devdotto', 'Devdotto', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Devdotto
include('simpleicons/D/Devdotto')

' renders the element
Devdotto('Devdotto', 'Devdotto', 'an optional tech label', 'an optional description')
@enduml
```

