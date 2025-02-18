# Equinixmetal


```text
simpleicons-14/E/Equinixmetal
```

```text
include('simpleicons-14/E/Equinixmetal')
```



| Illustration | Equinixmetal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Equinixmetal.png) | ![illustration for Equinixmetal](../../simpleicons-14/E/Equinixmetal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EquinixmetalXs>`
- `<$EquinixmetalSm>`
- `<$EquinixmetalMd>`
- `<$EquinixmetalLg>`





## Equinixmetal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Equinixmetal
include('simpleicons-14/E/Equinixmetal')

' renders the element
Equinixmetal('Equinixmetal', 'Equinixmetal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Equinixmetal
include('simpleicons-14/E/Equinixmetal')

' renders the element
Equinixmetal('Equinixmetal', 'Equinixmetal', 'an optional tech label', 'an optional description')
@enduml
```

