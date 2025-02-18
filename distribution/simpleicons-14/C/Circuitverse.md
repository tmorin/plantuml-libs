# Circuitverse


```text
simpleicons-14/C/Circuitverse
```

```text
include('simpleicons-14/C/Circuitverse')
```



| Illustration | Circuitverse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Circuitverse.png) | ![illustration for Circuitverse](../../simpleicons-14/C/Circuitverse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircuitverseXs>`
- `<$CircuitverseSm>`
- `<$CircuitverseMd>`
- `<$CircuitverseLg>`





## Circuitverse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Circuitverse
include('simpleicons-14/C/Circuitverse')

' renders the element
Circuitverse('Circuitverse', 'Circuitverse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Circuitverse
include('simpleicons-14/C/Circuitverse')

' renders the element
Circuitverse('Circuitverse', 'Circuitverse', 'an optional tech label', 'an optional description')
@enduml
```

