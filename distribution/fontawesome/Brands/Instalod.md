# Instalod


```text
fontawesome/Brands/Instalod
```

```text
include('fontawesome/Brands/Instalod')
```



| Illustration | Instalod |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Instalod.png) | ![illustration for Instalod](../../fontawesome/Brands/Instalod.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InstalodXs>`
- `<$InstalodSm>`
- `<$InstalodMd>`
- `<$InstalodLg>`





## Instalod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Instalod
include('fontawesome/Brands/Instalod')

' renders the element
Instalod('Instalod', 'Instalod', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Instalod
include('fontawesome/Brands/Instalod')

' renders the element
Instalod('Instalod', 'Instalod', 'an optional tech label', 'an optional description')
@enduml
```

