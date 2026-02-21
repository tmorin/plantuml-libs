# Wellsfargo


```text
simpleicons-14/W/Wellsfargo
```

```text
include('simpleicons-14/W/Wellsfargo')
```



| Illustration | Wellsfargo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wellsfargo.png) | ![illustration for Wellsfargo](../../simpleicons-14/W/Wellsfargo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WellsfargoXs>`
- `<$WellsfargoSm>`
- `<$WellsfargoMd>`
- `<$WellsfargoLg>`





## Wellsfargo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wellsfargo
include('simpleicons-14/W/Wellsfargo')

' renders the element
Wellsfargo('Wellsfargo', 'Wellsfargo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wellsfargo
include('simpleicons-14/W/Wellsfargo')

' renders the element
Wellsfargo('Wellsfargo', 'Wellsfargo', 'an optional tech label', 'an optional description')
@enduml
```

