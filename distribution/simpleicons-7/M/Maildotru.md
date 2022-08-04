# Maildotru


```text
simpleicons-7/M/Maildotru
```

```text
include('simpleicons-7/M/Maildotru')
```



| Illustration | Maildotru |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Maildotru.png) | ![illustration for Maildotru](../../simpleicons-7/M/Maildotru.Local.png) |




## Maildotru

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Maildotru
include('simpleicons-7/M/Maildotru')

' renders the element
Maildotru('Maildotru', 'Maildotru', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maildotru
include('simpleicons-7/M/Maildotru')

' renders the element
Maildotru('Maildotru', 'Maildotru', 'an optional tech label', 'an optional description')
@enduml
```

