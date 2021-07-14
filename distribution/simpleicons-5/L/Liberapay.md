# Liberapay


```text
simpleicons-5/L/Liberapay
```

```text
include('simpleicons-5/L/Liberapay')
```



| Illustration | Liberapay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Liberapay.png) | ![illustration for Liberapay](../../simpleicons-5/L/Liberapay.Local.png) |




## Liberapay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Liberapay
include('simpleicons-5/L/Liberapay')

' renders the element
Liberapay('Liberapay', 'Liberapay', 'an optional tech label')
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

' loads the Item which embeds the element Liberapay
include('simpleicons-5/L/Liberapay')

' renders the element
Liberapay('Liberapay', 'Liberapay', 'an optional tech label')
@enduml
```

