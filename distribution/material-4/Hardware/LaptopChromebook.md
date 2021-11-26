# LaptopChromebook


```text
material-4/Hardware/LaptopChromebook
```

```text
include('material-4/Hardware/LaptopChromebook')
```



| Illustration | LaptopChromebook |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/LaptopChromebook.png) | ![illustration for LaptopChromebook](../../material-4/Hardware/LaptopChromebook.Local.png) |




## LaptopChromebook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LaptopChromebook
include('material-4/Hardware/LaptopChromebook')

' renders the element
LaptopChromebook('LaptopChromebook', 'Laptop Chromebook', 'an optional tech label')
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

' loads the Item which embeds the element LaptopChromebook
include('material-4/Hardware/LaptopChromebook')

' renders the element
LaptopChromebook('LaptopChromebook', 'Laptop Chromebook', 'an optional tech label')
@enduml
```

