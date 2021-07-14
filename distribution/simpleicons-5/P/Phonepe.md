# Phonepe


```text
simpleicons-5/P/Phonepe
```

```text
include('simpleicons-5/P/Phonepe')
```



| Illustration | Phonepe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Phonepe.png) | ![illustration for Phonepe](../../simpleicons-5/P/Phonepe.Local.png) |




## Phonepe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Phonepe
include('simpleicons-5/P/Phonepe')

' renders the element
Phonepe('Phonepe', 'Phonepe', 'an optional tech label')
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

' loads the Item which embeds the element Phonepe
include('simpleicons-5/P/Phonepe')

' renders the element
Phonepe('Phonepe', 'Phonepe', 'an optional tech label')
@enduml
```

