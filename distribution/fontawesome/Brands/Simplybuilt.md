# Simplybuilt


```text
fontawesome/Brands/Simplybuilt
```

```text
include('fontawesome/Brands/Simplybuilt')
```



| Illustration | Simplybuilt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Simplybuilt.png) | ![illustration for Simplybuilt](../../fontawesome/Brands/Simplybuilt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SimplybuiltXs>`
- `<$SimplybuiltSm>`
- `<$SimplybuiltMd>`
- `<$SimplybuiltLg>`





## Simplybuilt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Simplybuilt
include('fontawesome/Brands/Simplybuilt')

' renders the element
Simplybuilt('Simplybuilt', 'Simplybuilt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Simplybuilt
include('fontawesome/Brands/Simplybuilt')

' renders the element
Simplybuilt('Simplybuilt', 'Simplybuilt', 'an optional tech label', 'an optional description')
@enduml
```

