# Laptop


```text
fontawesome/Solid/Laptop
```

```text
include('fontawesome/Solid/Laptop')
```



| Illustration | Laptop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Laptop.png) | ![illustration for Laptop](../../fontawesome/Solid/Laptop.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Laptop
include('fontawesome/Solid/Laptop')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Laptop
include('fontawesome/Solid/Laptop')

' renders the element
Laptop('Laptop', 'Laptop', 'an optional tech label', 'an optional description')
@enduml
```

