# LaptopCode


```text
fontawesome-5/Solid/LaptopCode
```

```text
include('fontawesome-5/Solid/LaptopCode')
```



| Illustration | LaptopCode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LaptopCode.png) | ![illustration for LaptopCode](../../fontawesome-5/Solid/LaptopCode.Local.png) |




## LaptopCode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LaptopCode
include('fontawesome-5/Solid/LaptopCode')

' renders the element
LaptopCode('LaptopCode', 'Laptop Code', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LaptopCode
include('fontawesome-5/Solid/LaptopCode')

' renders the element
LaptopCode('LaptopCode', 'Laptop Code', 'an optional tech label')
@enduml
```

