# Laptop


```text
homecloud-1/Hardware/Laptop
```

```text
include('homecloud-1/Hardware/Laptop')
```



| Illustration | Laptop | LaptopCard | LaptopGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../homecloud-1/Hardware/Laptop.png) | ![illustration for Laptop](../../homecloud-1/Hardware/Laptop.Local.png) | ![illustration for LaptopCard](../../homecloud-1/Hardware/LaptopCard.Local.png) | ![illustration for LaptopGroup](../../homecloud-1/Hardware/LaptopGroup.Local.png) |




## Laptop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element Laptop
include('homecloud-1/Hardware/Laptop')

' renders the element
Laptop('Laptop', 'Laptop', 'an optional tech label')
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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element Laptop
include('homecloud-1/Hardware/Laptop')

' renders the element
Laptop('Laptop', 'Laptop', 'an optional tech label')
@enduml
```

## LaptopCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element LaptopCard
include('homecloud-1/Hardware/Laptop')

' renders the element
LaptopCard('LaptopCard', 'Laptop Card', 'an optional description')
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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element LaptopCard
include('homecloud-1/Hardware/Laptop')

' renders the element
LaptopCard('LaptopCard', 'Laptop Card', 'an optional description')
@enduml
```

## LaptopGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element LaptopGroup
include('homecloud-1/Hardware/Laptop')

' renders the element
LaptopGroup('LaptopGroup', 'Laptop Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element LaptopGroup
include('homecloud-1/Hardware/Laptop')

' renders the element
LaptopGroup('LaptopGroup', 'Laptop Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

