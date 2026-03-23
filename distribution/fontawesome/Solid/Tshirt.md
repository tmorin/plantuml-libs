# Tshirt


```text
fontawesome/Solid/Tshirt
```

```text
include('fontawesome/Solid/Tshirt')
```



| Illustration | Tshirt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tshirt.png) | ![illustration for Tshirt](../../fontawesome/Solid/Tshirt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TshirtXs>`
- `<$TshirtSm>`
- `<$TshirtMd>`
- `<$TshirtLg>`





## Tshirt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tshirt
include('fontawesome/Solid/Tshirt')

' renders the element
Tshirt('Tshirt', 'Tshirt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tshirt
include('fontawesome/Solid/Tshirt')

' renders the element
Tshirt('Tshirt', 'Tshirt', 'an optional tech label', 'an optional description')
@enduml
```

