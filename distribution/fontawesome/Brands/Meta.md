# Meta


```text
fontawesome/Brands/Meta
```

```text
include('fontawesome/Brands/Meta')
```



| Illustration | Meta |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Meta.png) | ![illustration for Meta](../../fontawesome/Brands/Meta.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MetaXs>`
- `<$MetaSm>`
- `<$MetaMd>`
- `<$MetaLg>`





## Meta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Meta
include('fontawesome/Brands/Meta')

' renders the element
Meta('Meta', 'Meta', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Meta
include('fontawesome/Brands/Meta')

' renders the element
Meta('Meta', 'Meta', 'an optional tech label', 'an optional description')
@enduml
```

