# Ussunnah


```text
fontawesome/Brands/Ussunnah
```

```text
include('fontawesome/Brands/Ussunnah')
```



| Illustration | Ussunnah |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Ussunnah.png) | ![illustration for Ussunnah](../../fontawesome/Brands/Ussunnah.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UssunnahXs>`
- `<$UssunnahSm>`
- `<$UssunnahMd>`
- `<$UssunnahLg>`





## Ussunnah

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ussunnah
include('fontawesome/Brands/Ussunnah')

' renders the element
Ussunnah('Ussunnah', 'Ussunnah', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ussunnah
include('fontawesome/Brands/Ussunnah')

' renders the element
Ussunnah('Ussunnah', 'Ussunnah', 'an optional tech label', 'an optional description')
@enduml
```

