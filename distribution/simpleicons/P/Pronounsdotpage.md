# Pronounsdotpage


```text
simpleicons/P/Pronounsdotpage
```

```text
include('simpleicons/P/Pronounsdotpage')
```



| Illustration | Pronounsdotpage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pronounsdotpage.png) | ![illustration for Pronounsdotpage](../../simpleicons/P/Pronounsdotpage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PronounsdotpageXs>`
- `<$PronounsdotpageSm>`
- `<$PronounsdotpageMd>`
- `<$PronounsdotpageLg>`





## Pronounsdotpage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pronounsdotpage
include('simpleicons/P/Pronounsdotpage')

' renders the element
Pronounsdotpage('Pronounsdotpage', 'Pronounsdotpage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pronounsdotpage
include('simpleicons/P/Pronounsdotpage')

' renders the element
Pronounsdotpage('Pronounsdotpage', 'Pronounsdotpage', 'an optional tech label', 'an optional description')
@enduml
```

