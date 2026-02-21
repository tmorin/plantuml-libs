# Mix


```text
fontawesome/Brands/Mix
```

```text
include('fontawesome/Brands/Mix')
```



| Illustration | Mix |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Mix.png) | ![illustration for Mix](../../fontawesome/Brands/Mix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MixXs>`
- `<$MixSm>`
- `<$MixMd>`
- `<$MixLg>`





## Mix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mix
include('fontawesome/Brands/Mix')

' renders the element
Mix('Mix', 'Mix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mix
include('fontawesome/Brands/Mix')

' renders the element
Mix('Mix', 'Mix', 'an optional tech label', 'an optional description')
@enduml
```

