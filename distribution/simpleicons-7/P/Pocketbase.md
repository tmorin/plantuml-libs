# Pocketbase


```text
simpleicons-7/P/Pocketbase
```

```text
include('simpleicons-7/P/Pocketbase')
```



| Illustration | Pocketbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pocketbase.png) | ![illustration for Pocketbase](../../simpleicons-7/P/Pocketbase.Local.png) |




## Pocketbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pocketbase
include('simpleicons-7/P/Pocketbase')

' renders the element
Pocketbase('Pocketbase', 'Pocketbase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pocketbase
include('simpleicons-7/P/Pocketbase')

' renders the element
Pocketbase('Pocketbase', 'Pocketbase', 'an optional tech label', 'an optional description')
@enduml
```

