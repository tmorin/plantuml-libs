# Riscv


```text
simpleicons-14/R/Riscv
```

```text
include('simpleicons-14/R/Riscv')
```



| Illustration | Riscv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Riscv.png) | ![illustration for Riscv](../../simpleicons-14/R/Riscv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RiscvXs>`
- `<$RiscvSm>`
- `<$RiscvMd>`
- `<$RiscvLg>`





## Riscv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Riscv
include('simpleicons-14/R/Riscv')

' renders the element
Riscv('Riscv', 'Riscv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Riscv
include('simpleicons-14/R/Riscv')

' renders the element
Riscv('Riscv', 'Riscv', 'an optional tech label', 'an optional description')
@enduml
```

