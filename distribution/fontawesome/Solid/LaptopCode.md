# LaptopCode


```text
fontawesome/Solid/LaptopCode
```

```text
include('fontawesome/Solid/LaptopCode')
```



| Illustration | LaptopCode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LaptopCode.png) | ![illustration for LaptopCode](../../fontawesome/Solid/LaptopCode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaptopCodeXs>`
- `<$LaptopCodeSm>`
- `<$LaptopCodeMd>`
- `<$LaptopCodeLg>`





## LaptopCode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LaptopCode
include('fontawesome/Solid/LaptopCode')

' renders the element
LaptopCode('LaptopCode', 'Laptop Code', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LaptopCode
include('fontawesome/Solid/LaptopCode')

' renders the element
LaptopCode('LaptopCode', 'Laptop Code', 'an optional tech label', 'an optional description')
@enduml
```

