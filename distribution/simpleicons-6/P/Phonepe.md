# Phonepe


```text
simpleicons-6/P/Phonepe
```

```text
include('simpleicons-6/P/Phonepe')
```



| Illustration | Phonepe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Phonepe.png) | ![illustration for Phonepe](../../simpleicons-6/P/Phonepe.Local.png) |




## Phonepe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Phonepe
include('simpleicons-6/P/Phonepe')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Phonepe
include('simpleicons-6/P/Phonepe')

' renders the element
Phonepe('Phonepe', 'Phonepe', 'an optional tech label')
@enduml
```

