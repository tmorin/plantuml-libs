# Spacex


```text
simpleicons-14/S/Spacex
```

```text
include('simpleicons-14/S/Spacex')
```



| Illustration | Spacex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Spacex.png) | ![illustration for Spacex](../../simpleicons-14/S/Spacex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpacexXs>`
- `<$SpacexSm>`
- `<$SpacexMd>`
- `<$SpacexLg>`





## Spacex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Spacex
include('simpleicons-14/S/Spacex')

' renders the element
Spacex('Spacex', 'Spacex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spacex
include('simpleicons-14/S/Spacex')

' renders the element
Spacex('Spacex', 'Spacex', 'an optional tech label', 'an optional description')
@enduml
```

