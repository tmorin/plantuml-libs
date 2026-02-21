# Sitrox


```text
fontawesome/Brands/Sitrox
```

```text
include('fontawesome/Brands/Sitrox')
```



| Illustration | Sitrox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Sitrox.png) | ![illustration for Sitrox](../../fontawesome/Brands/Sitrox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SitroxXs>`
- `<$SitroxSm>`
- `<$SitroxMd>`
- `<$SitroxLg>`





## Sitrox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Sitrox
include('fontawesome/Brands/Sitrox')

' renders the element
Sitrox('Sitrox', 'Sitrox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sitrox
include('fontawesome/Brands/Sitrox')

' renders the element
Sitrox('Sitrox', 'Sitrox', 'an optional tech label', 'an optional description')
@enduml
```

