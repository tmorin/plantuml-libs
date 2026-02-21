# Multisim


```text
simpleicons-14/M/Multisim
```

```text
include('simpleicons-14/M/Multisim')
```



| Illustration | Multisim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Multisim.png) | ![illustration for Multisim](../../simpleicons-14/M/Multisim.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MultisimXs>`
- `<$MultisimSm>`
- `<$MultisimMd>`
- `<$MultisimLg>`





## Multisim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Multisim
include('simpleicons-14/M/Multisim')

' renders the element
Multisim('Multisim', 'Multisim', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Multisim
include('simpleicons-14/M/Multisim')

' renders the element
Multisim('Multisim', 'Multisim', 'an optional tech label', 'an optional description')
@enduml
```

