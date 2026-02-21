# Hurricane


```text
fontawesome/Solid/Hurricane
```

```text
include('fontawesome/Solid/Hurricane')
```



| Illustration | Hurricane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Hurricane.png) | ![illustration for Hurricane](../../fontawesome/Solid/Hurricane.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HurricaneXs>`
- `<$HurricaneSm>`
- `<$HurricaneMd>`
- `<$HurricaneLg>`





## Hurricane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hurricane
include('fontawesome/Solid/Hurricane')

' renders the element
Hurricane('Hurricane', 'Hurricane', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hurricane
include('fontawesome/Solid/Hurricane')

' renders the element
Hurricane('Hurricane', 'Hurricane', 'an optional tech label', 'an optional description')
@enduml
```

