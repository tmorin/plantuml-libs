# Auchan


```text
simpleicons-8/A/Auchan
```

```text
include('simpleicons-8/A/Auchan')
```



| Illustration | Auchan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Auchan.png) | ![illustration for Auchan](../../simpleicons-8/A/Auchan.Local.png) |




## Auchan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Auchan
include('simpleicons-8/A/Auchan')

' renders the element
Auchan('Auchan', 'Auchan', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Auchan
include('simpleicons-8/A/Auchan')

' renders the element
Auchan('Auchan', 'Auchan', 'an optional tech label', 'an optional description')
@enduml
```

