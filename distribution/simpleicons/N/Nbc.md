# Nbc


```text
simpleicons/N/Nbc
```

```text
include('simpleicons/N/Nbc')
```



| Illustration | Nbc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nbc.png) | ![illustration for Nbc](../../simpleicons/N/Nbc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NbcXs>`
- `<$NbcSm>`
- `<$NbcMd>`
- `<$NbcLg>`





## Nbc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nbc
include('simpleicons/N/Nbc')

' renders the element
Nbc('Nbc', 'Nbc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nbc
include('simpleicons/N/Nbc')

' renders the element
Nbc('Nbc', 'Nbc', 'an optional tech label', 'an optional description')
@enduml
```

