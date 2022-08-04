# Plurk


```text
simpleicons-7/P/Plurk
```

```text
include('simpleicons-7/P/Plurk')
```



| Illustration | Plurk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Plurk.png) | ![illustration for Plurk](../../simpleicons-7/P/Plurk.Local.png) |




## Plurk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Plurk
include('simpleicons-7/P/Plurk')

' renders the element
Plurk('Plurk', 'Plurk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Plurk
include('simpleicons-7/P/Plurk')

' renders the element
Plurk('Plurk', 'Plurk', 'an optional tech label', 'an optional description')
@enduml
```

