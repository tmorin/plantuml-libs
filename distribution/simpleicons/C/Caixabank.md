# Caixabank


```text
simpleicons/C/Caixabank
```

```text
include('simpleicons/C/Caixabank')
```



| Illustration | Caixabank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Caixabank.png) | ![illustration for Caixabank](../../simpleicons/C/Caixabank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaixabankXs>`
- `<$CaixabankSm>`
- `<$CaixabankMd>`
- `<$CaixabankLg>`





## Caixabank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Caixabank
include('simpleicons/C/Caixabank')

' renders the element
Caixabank('Caixabank', 'Caixabank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Caixabank
include('simpleicons/C/Caixabank')

' renders the element
Caixabank('Caixabank', 'Caixabank', 'an optional tech label', 'an optional description')
@enduml
```

