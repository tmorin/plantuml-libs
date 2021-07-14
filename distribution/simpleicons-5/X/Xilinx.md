# Xilinx


```text
simpleicons-5/X/Xilinx
```

```text
include('simpleicons-5/X/Xilinx')
```



| Illustration | Xilinx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/X/Xilinx.png) | ![illustration for Xilinx](../../simpleicons-5/X/Xilinx.Local.png) |




## Xilinx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xilinx
include('simpleicons-5/X/Xilinx')

' renders the element
Xilinx('Xilinx', 'Xilinx', 'an optional tech label')
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

' loads the Item which embeds the element Xilinx
include('simpleicons-5/X/Xilinx')

' renders the element
Xilinx('Xilinx', 'Xilinx', 'an optional tech label')
@enduml
```

