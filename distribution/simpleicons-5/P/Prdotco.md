# Prdotco


```text
simpleicons-5/P/Prdotco
```

```text
include('simpleicons-5/P/Prdotco')
```



| Illustration | Prdotco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Prdotco.png) | ![illustration for Prdotco](../../simpleicons-5/P/Prdotco.Local.png) |




## Prdotco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Prdotco
include('simpleicons-5/P/Prdotco')

' renders the element
Prdotco('Prdotco', 'Prdotco', 'an optional tech label')
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

' loads the Item which embeds the element Prdotco
include('simpleicons-5/P/Prdotco')

' renders the element
Prdotco('Prdotco', 'Prdotco', 'an optional tech label')
@enduml
```

