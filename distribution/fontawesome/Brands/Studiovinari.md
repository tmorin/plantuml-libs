# Studiovinari


```text
fontawesome/Brands/Studiovinari
```

```text
include('fontawesome/Brands/Studiovinari')
```



| Illustration | Studiovinari |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Studiovinari.png) | ![illustration for Studiovinari](../../fontawesome/Brands/Studiovinari.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StudiovinariXs>`
- `<$StudiovinariSm>`
- `<$StudiovinariMd>`
- `<$StudiovinariLg>`





## Studiovinari

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Studiovinari
include('fontawesome/Brands/Studiovinari')

' renders the element
Studiovinari('Studiovinari', 'Studiovinari', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Studiovinari
include('fontawesome/Brands/Studiovinari')

' renders the element
Studiovinari('Studiovinari', 'Studiovinari', 'an optional tech label', 'an optional description')
@enduml
```

