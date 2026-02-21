# Nat


```text
material/Communication/Nat
```

```text
include('material/Communication/Nat')
```



| Illustration | Nat |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/Nat.png) | ![illustration for Nat](../../material/Communication/Nat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NatXs>`
- `<$NatSm>`
- `<$NatMd>`
- `<$NatLg>`





## Nat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Nat
include('material/Communication/Nat')

' renders the element
Nat('Nat', 'Nat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nat
include('material/Communication/Nat')

' renders the element
Nat('Nat', 'Nat', 'an optional tech label', 'an optional description')
@enduml
```

