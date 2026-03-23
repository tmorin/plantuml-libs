# Multiply


```text
fontawesome/Solid/Multiply
```

```text
include('fontawesome/Solid/Multiply')
```



| Illustration | Multiply |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Multiply.png) | ![illustration for Multiply](../../fontawesome/Solid/Multiply.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MultiplyXs>`
- `<$MultiplySm>`
- `<$MultiplyMd>`
- `<$MultiplyLg>`





## Multiply

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Multiply
include('fontawesome/Solid/Multiply')

' renders the element
Multiply('Multiply', 'Multiply', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Multiply
include('fontawesome/Solid/Multiply')

' renders the element
Multiply('Multiply', 'Multiply', 'an optional tech label', 'an optional description')
@enduml
```

