# Phonepe


```text
simpleicons-7/P/Phonepe
```

```text
include('simpleicons-7/P/Phonepe')
```



| Illustration | Phonepe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Phonepe.png) | ![illustration for Phonepe](../../simpleicons-7/P/Phonepe.Local.png) |




## Phonepe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Phonepe
include('simpleicons-7/P/Phonepe')

' renders the element
Phonepe('Phonepe', 'Phonepe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Phonepe
include('simpleicons-7/P/Phonepe')

' renders the element
Phonepe('Phonepe', 'Phonepe', 'an optional tech label', 'an optional description')
@enduml
```

