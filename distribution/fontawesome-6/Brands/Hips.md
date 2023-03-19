# Hips


```text
fontawesome-6/Brands/Hips
```

```text
include('fontawesome-6/Brands/Hips')
```



| Illustration | Hips |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Hips.png) | ![illustration for Hips](../../fontawesome-6/Brands/Hips.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HipsXs>`
- `<$HipsSm>`
- `<$HipsMd>`
- `<$HipsLg>`





## Hips

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hips
include('fontawesome-6/Brands/Hips')

' renders the element
Hips('Hips', 'Hips', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hips
include('fontawesome-6/Brands/Hips')

' renders the element
Hips('Hips', 'Hips', 'an optional tech label', 'an optional description')
@enduml
```

