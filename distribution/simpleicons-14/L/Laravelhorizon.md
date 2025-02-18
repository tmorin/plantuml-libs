# Laravelhorizon


```text
simpleicons-14/L/Laravelhorizon
```

```text
include('simpleicons-14/L/Laravelhorizon')
```



| Illustration | Laravelhorizon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Laravelhorizon.png) | ![illustration for Laravelhorizon](../../simpleicons-14/L/Laravelhorizon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaravelhorizonXs>`
- `<$LaravelhorizonSm>`
- `<$LaravelhorizonMd>`
- `<$LaravelhorizonLg>`





## Laravelhorizon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Laravelhorizon
include('simpleicons-14/L/Laravelhorizon')

' renders the element
Laravelhorizon('Laravelhorizon', 'Laravelhorizon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Laravelhorizon
include('simpleicons-14/L/Laravelhorizon')

' renders the element
Laravelhorizon('Laravelhorizon', 'Laravelhorizon', 'an optional tech label', 'an optional description')
@enduml
```

