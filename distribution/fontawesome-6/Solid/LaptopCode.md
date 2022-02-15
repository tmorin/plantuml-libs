# LaptopCode


```text
fontawesome-6/Solid/LaptopCode
```

```text
include('fontawesome-6/Solid/LaptopCode')
```



| Illustration | LaptopCode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LaptopCode.png) | ![illustration for LaptopCode](../../fontawesome-6/Solid/LaptopCode.Local.png) |




## LaptopCode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LaptopCode
include('fontawesome-6/Solid/LaptopCode')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LaptopCode
include('fontawesome-6/Solid/LaptopCode')

' renders the element
LaptopCode('LaptopCode', 'Laptop Code', 'an optional tech label')
@enduml
```

