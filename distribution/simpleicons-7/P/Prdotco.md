# Prdotco


```text
simpleicons-7/P/Prdotco
```

```text
include('simpleicons-7/P/Prdotco')
```



| Illustration | Prdotco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Prdotco.png) | ![illustration for Prdotco](../../simpleicons-7/P/Prdotco.Local.png) |




## Prdotco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Prdotco
include('simpleicons-7/P/Prdotco')

' renders the element
Prdotco('Prdotco', 'Prdotco', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prdotco
include('simpleicons-7/P/Prdotco')

' renders the element
Prdotco('Prdotco', 'Prdotco', 'an optional tech label', 'an optional description')
@enduml
```

