# Pepsi


```text
simpleicons-5/P/Pepsi
```

```text
include('simpleicons-5/P/Pepsi')
```



| Illustration | Pepsi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pepsi.png) | ![illustration for Pepsi](../../simpleicons-5/P/Pepsi.Local.png) |




## Pepsi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pepsi
include('simpleicons-5/P/Pepsi')

' renders the element
Pepsi('Pepsi', 'Pepsi', 'an optional tech label')
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

' loads the Item which embeds the element Pepsi
include('simpleicons-5/P/Pepsi')

' renders the element
Pepsi('Pepsi', 'Pepsi', 'an optional tech label')
@enduml
```

