# Power


```text
material/Notification/Power
```

```text
include('material/Notification/Power')
```



| Illustration | Power |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/Power.png) | ![illustration for Power](../../material/Notification/Power.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PowerXs>`
- `<$PowerSm>`
- `<$PowerMd>`
- `<$PowerLg>`





## Power

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Power
include('material/Notification/Power')

' renders the element
Power('Power', 'Power', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Power
include('material/Notification/Power')

' renders the element
Power('Power', 'Power', 'an optional tech label', 'an optional description')
@enduml
```

