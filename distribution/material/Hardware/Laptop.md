# Laptop


```text
material/Hardware/Laptop
```

```text
include('material/Hardware/Laptop')
```



| Illustration | Laptop |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/Laptop.png) | ![illustration for Laptop](../../material/Hardware/Laptop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaptopXs>`
- `<$LaptopSm>`
- `<$LaptopMd>`
- `<$LaptopLg>`





## Laptop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Laptop
include('material/Hardware/Laptop')

' renders the element
Laptop('Laptop', 'Laptop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Laptop
include('material/Hardware/Laptop')

' renders the element
Laptop('Laptop', 'Laptop', 'an optional tech label', 'an optional description')
@enduml
```

