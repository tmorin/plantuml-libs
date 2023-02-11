# Wasmer


```text
simpleicons-8/W/Wasmer
```

```text
include('simpleicons-8/W/Wasmer')
```



| Illustration | Wasmer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Wasmer.png) | ![illustration for Wasmer](../../simpleicons-8/W/Wasmer.Local.png) |




## Wasmer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wasmer
include('simpleicons-8/W/Wasmer')

' renders the element
Wasmer('Wasmer', 'Wasmer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wasmer
include('simpleicons-8/W/Wasmer')

' renders the element
Wasmer('Wasmer', 'Wasmer', 'an optional tech label', 'an optional description')
@enduml
```

