# Powershell


```text
simpleicons-14/P/Powershell
```

```text
include('simpleicons-14/P/Powershell')
```



| Illustration | Powershell |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Powershell.png) | ![illustration for Powershell](../../simpleicons-14/P/Powershell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PowershellXs>`
- `<$PowershellSm>`
- `<$PowershellMd>`
- `<$PowershellLg>`





## Powershell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Powershell
include('simpleicons-14/P/Powershell')

' renders the element
Powershell('Powershell', 'Powershell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Powershell
include('simpleicons-14/P/Powershell')

' renders the element
Powershell('Powershell', 'Powershell', 'an optional tech label', 'an optional description')
@enduml
```

