# Mui


```text
simpleicons-14/M/Mui
```

```text
include('simpleicons-14/M/Mui')
```



| Illustration | Mui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mui.png) | ![illustration for Mui](../../simpleicons-14/M/Mui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MuiXs>`
- `<$MuiSm>`
- `<$MuiMd>`
- `<$MuiLg>`





## Mui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mui
include('simpleicons-14/M/Mui')

' renders the element
Mui('Mui', 'Mui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mui
include('simpleicons-14/M/Mui')

' renders the element
Mui('Mui', 'Mui', 'an optional tech label', 'an optional description')
@enduml
```

