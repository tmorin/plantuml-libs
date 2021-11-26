# Dunked


```text
simpleicons-5/D/Dunked
```

```text
include('simpleicons-5/D/Dunked')
```



| Illustration | Dunked |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dunked.png) | ![illustration for Dunked](../../simpleicons-5/D/Dunked.Local.png) |




## Dunked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dunked
include('simpleicons-5/D/Dunked')

' renders the element
Dunked('Dunked', 'Dunked', 'an optional tech label')
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

' loads the Item which embeds the element Dunked
include('simpleicons-5/D/Dunked')

' renders the element
Dunked('Dunked', 'Dunked', 'an optional tech label')
@enduml
```

