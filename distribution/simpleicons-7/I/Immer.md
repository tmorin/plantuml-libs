# Immer


```text
simpleicons-7/I/Immer
```

```text
include('simpleicons-7/I/Immer')
```



| Illustration | Immer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Immer.png) | ![illustration for Immer](../../simpleicons-7/I/Immer.Local.png) |




## Immer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Immer
include('simpleicons-7/I/Immer')

' renders the element
Immer('Immer', 'Immer', 'an optional tech label')
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

' loads the Item which embeds the element Immer
include('simpleicons-7/I/Immer')

' renders the element
Immer('Immer', 'Immer', 'an optional tech label')
@enduml
```

