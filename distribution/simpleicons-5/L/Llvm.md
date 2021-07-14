# Llvm


```text
simpleicons-5/L/Llvm
```

```text
include('simpleicons-5/L/Llvm')
```



| Illustration | Llvm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Llvm.png) | ![illustration for Llvm](../../simpleicons-5/L/Llvm.Local.png) |




## Llvm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Llvm
include('simpleicons-5/L/Llvm')

' renders the element
Llvm('Llvm', 'Llvm', 'an optional tech label')
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

' loads the Item which embeds the element Llvm
include('simpleicons-5/L/Llvm')

' renders the element
Llvm('Llvm', 'Llvm', 'an optional tech label')
@enduml
```

