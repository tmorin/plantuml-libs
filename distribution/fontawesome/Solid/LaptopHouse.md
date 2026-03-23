# LaptopHouse


```text
fontawesome/Solid/LaptopHouse
```

```text
include('fontawesome/Solid/LaptopHouse')
```



| Illustration | LaptopHouse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LaptopHouse.png) | ![illustration for LaptopHouse](../../fontawesome/Solid/LaptopHouse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaptopHouseXs>`
- `<$LaptopHouseSm>`
- `<$LaptopHouseMd>`
- `<$LaptopHouseLg>`





## LaptopHouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LaptopHouse
include('fontawesome/Solid/LaptopHouse')

' renders the element
LaptopHouse('LaptopHouse', 'Laptop House', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element LaptopHouse
include('fontawesome/Solid/LaptopHouse')

' renders the element
LaptopHouse('LaptopHouse', 'Laptop House', 'an optional tech label', 'an optional description')
@enduml
```

