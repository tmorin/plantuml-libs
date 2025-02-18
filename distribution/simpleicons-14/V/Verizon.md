# Verizon


```text
simpleicons-14/V/Verizon
```

```text
include('simpleicons-14/V/Verizon')
```



| Illustration | Verizon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Verizon.png) | ![illustration for Verizon](../../simpleicons-14/V/Verizon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VerizonXs>`
- `<$VerizonSm>`
- `<$VerizonMd>`
- `<$VerizonLg>`





## Verizon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Verizon
include('simpleicons-14/V/Verizon')

' renders the element
Verizon('Verizon', 'Verizon', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Verizon
include('simpleicons-14/V/Verizon')

' renders the element
Verizon('Verizon', 'Verizon', 'an optional tech label', 'an optional description')
@enduml
```

