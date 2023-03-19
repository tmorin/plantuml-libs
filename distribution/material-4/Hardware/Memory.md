# Memory


```text
material-4/Hardware/Memory
```

```text
include('material-4/Hardware/Memory')
```



| Illustration | Memory |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Memory.png) | ![illustration for Memory](../../material-4/Hardware/Memory.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MemoryXs>`
- `<$MemorySm>`
- `<$MemoryMd>`
- `<$MemoryLg>`





## Memory

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Memory
include('material-4/Hardware/Memory')

' renders the element
Memory('Memory', 'Memory', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Memory
include('material-4/Hardware/Memory')

' renders the element
Memory('Memory', 'Memory', 'an optional tech label', 'an optional description')
@enduml
```

