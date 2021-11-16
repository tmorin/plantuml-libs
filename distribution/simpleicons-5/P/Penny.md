# Penny


```text
simpleicons-5/P/Penny
```

```text
include('simpleicons-5/P/Penny')
```



| Illustration | Penny |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Penny.png) | ![illustration for Penny](../../simpleicons-5/P/Penny.Local.png) |




## Penny

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Penny
include('simpleicons-5/P/Penny')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Penny
include('simpleicons-5/P/Penny')

' renders the element
Penny('Penny', 'Penny', 'an optional tech label')
@enduml
```

