# LaptopChromebook


```text
material/Hardware/LaptopChromebook
```

```text
include('material/Hardware/LaptopChromebook')
```



| Illustration | LaptopChromebook |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/LaptopChromebook.png) | ![illustration for LaptopChromebook](../../material/Hardware/LaptopChromebook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaptopChromebookXs>`
- `<$LaptopChromebookSm>`
- `<$LaptopChromebookMd>`
- `<$LaptopChromebookLg>`





## LaptopChromebook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LaptopChromebook
include('material/Hardware/LaptopChromebook')

' renders the element
LaptopChromebook('LaptopChromebook', 'Laptop Chromebook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LaptopChromebook
include('material/Hardware/LaptopChromebook')

' renders the element
LaptopChromebook('LaptopChromebook', 'Laptop Chromebook', 'an optional tech label', 'an optional description')
@enduml
```

