# Ufc


```text
simpleicons-5/U/Ufc
```

```text
include('simpleicons-5/U/Ufc')
```



| Illustration | Ufc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Ufc.png) | ![illustration for Ufc](../../simpleicons-5/U/Ufc.Local.png) |




## Ufc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ufc
include('simpleicons-5/U/Ufc')

' renders the element
Ufc('Ufc', 'Ufc', 'an optional tech label')
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

' loads the Item which embeds the element Ufc
include('simpleicons-5/U/Ufc')

' renders the element
Ufc('Ufc', 'Ufc', 'an optional tech label')
@enduml
```

