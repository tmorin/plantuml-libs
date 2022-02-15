# Xilinx


```text
simpleicons-6/X/Xilinx
```

```text
include('simpleicons-6/X/Xilinx')
```



| Illustration | Xilinx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/X/Xilinx.png) | ![illustration for Xilinx](../../simpleicons-6/X/Xilinx.Local.png) |




## Xilinx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Xilinx
include('simpleicons-6/X/Xilinx')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Xilinx
include('simpleicons-6/X/Xilinx')

' renders the element
Xilinx('Xilinx', 'Xilinx', 'an optional tech label')
@enduml
```

