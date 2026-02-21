# Memory


```text
material/Hardware/Memory
```

```text
include('material/Hardware/Memory')
```



| Illustration | Memory |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/Memory.png) | ![illustration for Memory](../../material/Hardware/Memory.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Memory
include('material/Hardware/Memory')

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
include('material/bootstrap')

' loads the Item which embeds the element Memory
include('material/Hardware/Memory')

' renders the element
Memory('Memory', 'Memory', 'an optional tech label', 'an optional description')
@enduml
```

