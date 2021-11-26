# Powershell


```text
simpleicons-5/P/Powershell
```

```text
include('simpleicons-5/P/Powershell')
```



| Illustration | Powershell |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Powershell.png) | ![illustration for Powershell](../../simpleicons-5/P/Powershell.Local.png) |




## Powershell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Powershell
include('simpleicons-5/P/Powershell')

' renders the element
Powershell('Powershell', 'Powershell', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Powershell
include('simpleicons-5/P/Powershell')

' renders the element
Powershell('Powershell', 'Powershell', 'an optional tech label')
@enduml
```

