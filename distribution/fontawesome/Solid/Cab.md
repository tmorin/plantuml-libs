# Cab


```text
fontawesome/Solid/Cab
```

```text
include('fontawesome/Solid/Cab')
```



| Illustration | Cab |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cab.png) | ![illustration for Cab](../../fontawesome/Solid/Cab.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CabXs>`
- `<$CabSm>`
- `<$CabMd>`
- `<$CabLg>`





## Cab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cab
include('fontawesome/Solid/Cab')

' renders the element
Cab('Cab', 'Cab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cab
include('fontawesome/Solid/Cab')

' renders the element
Cab('Cab', 'Cab', 'an optional tech label', 'an optional description')
@enduml
```

