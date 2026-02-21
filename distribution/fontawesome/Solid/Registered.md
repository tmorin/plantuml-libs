# Registered


```text
fontawesome/Solid/Registered
```

```text
include('fontawesome/Solid/Registered')
```



| Illustration | Registered |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Registered.png) | ![illustration for Registered](../../fontawesome/Solid/Registered.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RegisteredXs>`
- `<$RegisteredSm>`
- `<$RegisteredMd>`
- `<$RegisteredLg>`





## Registered

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Registered
include('fontawesome/Solid/Registered')

' renders the element
Registered('Registered', 'Registered', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Registered
include('fontawesome/Solid/Registered')

' renders the element
Registered('Registered', 'Registered', 'an optional tech label', 'an optional description')
@enduml
```

