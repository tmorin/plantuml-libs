# Xilinx


```text
simpleicons-7/X/Xilinx
```

```text
include('simpleicons-7/X/Xilinx')
```



| Illustration | Xilinx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/X/Xilinx.png) | ![illustration for Xilinx](../../simpleicons-7/X/Xilinx.Local.png) |




## Xilinx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Xilinx
include('simpleicons-7/X/Xilinx')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Xilinx
include('simpleicons-7/X/Xilinx')

' renders the element
Xilinx('Xilinx', 'Xilinx', 'an optional tech label')
@enduml
```

