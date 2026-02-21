# Helium


```text
simpleicons-14/H/Helium
```

```text
include('simpleicons-14/H/Helium')
```



| Illustration | Helium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Helium.png) | ![illustration for Helium](../../simpleicons-14/H/Helium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeliumXs>`
- `<$HeliumSm>`
- `<$HeliumMd>`
- `<$HeliumLg>`





## Helium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Helium
include('simpleicons-14/H/Helium')

' renders the element
Helium('Helium', 'Helium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Helium
include('simpleicons-14/H/Helium')

' renders the element
Helium('Helium', 'Helium', 'an optional tech label', 'an optional description')
@enduml
```

