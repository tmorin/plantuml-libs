# StoreAlt


```text
fontawesome/Solid/StoreAlt
```

```text
include('fontawesome/Solid/StoreAlt')
```



| Illustration | StoreAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/StoreAlt.png) | ![illustration for StoreAlt](../../fontawesome/Solid/StoreAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StoreAltXs>`
- `<$StoreAltSm>`
- `<$StoreAltMd>`
- `<$StoreAltLg>`





## StoreAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element StoreAlt
include('fontawesome/Solid/StoreAlt')

' renders the element
StoreAlt('StoreAlt', 'Store Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StoreAlt
include('fontawesome/Solid/StoreAlt')

' renders the element
StoreAlt('StoreAlt', 'Store Alt', 'an optional tech label', 'an optional description')
@enduml
```

