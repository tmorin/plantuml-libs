# Penny


```text
simpleicons-6/P/Penny
```

```text
include('simpleicons-6/P/Penny')
```



| Illustration | Penny |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Penny.png) | ![illustration for Penny](../../simpleicons-6/P/Penny.Local.png) |




## Penny

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Penny
include('simpleicons-6/P/Penny')

' renders the element
Penny('Penny', 'Penny', 'an optional tech label')
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

' loads the Item which embeds the element Penny
include('simpleicons-6/P/Penny')

' renders the element
Penny('Penny', 'Penny', 'an optional tech label')
@enduml
```

