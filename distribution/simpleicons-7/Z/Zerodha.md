# Zerodha


```text
simpleicons-7/Z/Zerodha
```

```text
include('simpleicons-7/Z/Zerodha')
```



| Illustration | Zerodha |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zerodha.png) | ![illustration for Zerodha](../../simpleicons-7/Z/Zerodha.Local.png) |




## Zerodha

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zerodha
include('simpleicons-7/Z/Zerodha')

' renders the element
Zerodha('Zerodha', 'Zerodha', 'an optional tech label')
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

' loads the Item which embeds the element Zerodha
include('simpleicons-7/Z/Zerodha')

' renders the element
Zerodha('Zerodha', 'Zerodha', 'an optional tech label')
@enduml
```

