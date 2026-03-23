# Krw


```text
fontawesome/Solid/Krw
```

```text
include('fontawesome/Solid/Krw')
```



| Illustration | Krw |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Krw.png) | ![illustration for Krw](../../fontawesome/Solid/Krw.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KrwXs>`
- `<$KrwSm>`
- `<$KrwMd>`
- `<$KrwLg>`





## Krw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Krw
include('fontawesome/Solid/Krw')

' renders the element
Krw('Krw', 'Krw', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Krw
include('fontawesome/Solid/Krw')

' renders the element
Krw('Krw', 'Krw', 'an optional tech label', 'an optional description')
@enduml
```

