# Dolibarr


```text
simpleicons-14/D/Dolibarr
```

```text
include('simpleicons-14/D/Dolibarr')
```



| Illustration | Dolibarr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dolibarr.png) | ![illustration for Dolibarr](../../simpleicons-14/D/Dolibarr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DolibarrXs>`
- `<$DolibarrSm>`
- `<$DolibarrMd>`
- `<$DolibarrLg>`





## Dolibarr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dolibarr
include('simpleicons-14/D/Dolibarr')

' renders the element
Dolibarr('Dolibarr', 'Dolibarr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dolibarr
include('simpleicons-14/D/Dolibarr')

' renders the element
Dolibarr('Dolibarr', 'Dolibarr', 'an optional tech label', 'an optional description')
@enduml
```

