# Cbc


```text
simpleicons-14/C/Cbc
```

```text
include('simpleicons-14/C/Cbc')
```



| Illustration | Cbc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cbc.png) | ![illustration for Cbc](../../simpleicons-14/C/Cbc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CbcXs>`
- `<$CbcSm>`
- `<$CbcMd>`
- `<$CbcLg>`





## Cbc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cbc
include('simpleicons-14/C/Cbc')

' renders the element
Cbc('Cbc', 'Cbc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cbc
include('simpleicons-14/C/Cbc')

' renders the element
Cbc('Cbc', 'Cbc', 'an optional tech label', 'an optional description')
@enduml
```

