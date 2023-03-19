# Autorenew


```text
material-4/Action/Autorenew
```

```text
include('material-4/Action/Autorenew')
```



| Illustration | Autorenew |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Autorenew.png) | ![illustration for Autorenew](../../material-4/Action/Autorenew.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutorenewXs>`
- `<$AutorenewSm>`
- `<$AutorenewMd>`
- `<$AutorenewLg>`





## Autorenew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Autorenew
include('material-4/Action/Autorenew')

' renders the element
Autorenew('Autorenew', 'Autorenew', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Autorenew
include('material-4/Action/Autorenew')

' renders the element
Autorenew('Autorenew', 'Autorenew', 'an optional tech label', 'an optional description')
@enduml
```

