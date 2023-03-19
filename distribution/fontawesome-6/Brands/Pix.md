# Pix


```text
fontawesome-6/Brands/Pix
```

```text
include('fontawesome-6/Brands/Pix')
```



| Illustration | Pix |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Pix.png) | ![illustration for Pix](../../fontawesome-6/Brands/Pix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PixXs>`
- `<$PixSm>`
- `<$PixMd>`
- `<$PixLg>`





## Pix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Pix
include('fontawesome-6/Brands/Pix')

' renders the element
Pix('Pix', 'Pix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pix
include('fontawesome-6/Brands/Pix')

' renders the element
Pix('Pix', 'Pix', 'an optional tech label', 'an optional description')
@enduml
```

