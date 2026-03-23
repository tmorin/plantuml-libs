# Pixelfed


```text
fontawesome/Brands/Pixelfed
```

```text
include('fontawesome/Brands/Pixelfed')
```



| Illustration | Pixelfed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Pixelfed.png) | ![illustration for Pixelfed](../../fontawesome/Brands/Pixelfed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PixelfedXs>`
- `<$PixelfedSm>`
- `<$PixelfedMd>`
- `<$PixelfedLg>`





## Pixelfed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pixelfed
include('fontawesome/Brands/Pixelfed')

' renders the element
Pixelfed('Pixelfed', 'Pixelfed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pixelfed
include('fontawesome/Brands/Pixelfed')

' renders the element
Pixelfed('Pixelfed', 'Pixelfed', 'an optional tech label', 'an optional description')
@enduml
```

