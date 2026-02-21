# BusinessCenter


```text
material/Places/BusinessCenter
```

```text
include('material/Places/BusinessCenter')
```



| Illustration | BusinessCenter |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/BusinessCenter.png) | ![illustration for BusinessCenter](../../material/Places/BusinessCenter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BusinessCenterXs>`
- `<$BusinessCenterSm>`
- `<$BusinessCenterMd>`
- `<$BusinessCenterLg>`





## BusinessCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BusinessCenter
include('material/Places/BusinessCenter')

' renders the element
BusinessCenter('BusinessCenter', 'Business Center', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BusinessCenter
include('material/Places/BusinessCenter')

' renders the element
BusinessCenter('BusinessCenter', 'Business Center', 'an optional tech label', 'an optional description')
@enduml
```

