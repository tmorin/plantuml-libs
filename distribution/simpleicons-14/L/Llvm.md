# Llvm


```text
simpleicons-14/L/Llvm
```

```text
include('simpleicons-14/L/Llvm')
```



| Illustration | Llvm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Llvm.png) | ![illustration for Llvm](../../simpleicons-14/L/Llvm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LlvmXs>`
- `<$LlvmSm>`
- `<$LlvmMd>`
- `<$LlvmLg>`





## Llvm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Llvm
include('simpleicons-14/L/Llvm')

' renders the element
Llvm('Llvm', 'Llvm', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Llvm
include('simpleicons-14/L/Llvm')

' renders the element
Llvm('Llvm', 'Llvm', 'an optional tech label', 'an optional description')
@enduml
```

