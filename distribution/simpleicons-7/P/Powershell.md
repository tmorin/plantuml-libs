# Powershell


```text
simpleicons-7/P/Powershell
```

```text
include('simpleicons-7/P/Powershell')
```



| Illustration | Powershell |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Powershell.png) | ![illustration for Powershell](../../simpleicons-7/P/Powershell.Local.png) |




## Powershell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Powershell
include('simpleicons-7/P/Powershell')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Powershell
include('simpleicons-7/P/Powershell')

' renders the element
Powershell('Powershell', 'Powershell', 'an optional tech label', 'an optional description')
@enduml
```

