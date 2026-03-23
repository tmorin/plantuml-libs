# SquareDeskpro


```text
fontawesome/Brands/SquareDeskpro
```

```text
include('fontawesome/Brands/SquareDeskpro')
```



| Illustration | SquareDeskpro |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareDeskpro.png) | ![illustration for SquareDeskpro](../../fontawesome/Brands/SquareDeskpro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareDeskproXs>`
- `<$SquareDeskproSm>`
- `<$SquareDeskproMd>`
- `<$SquareDeskproLg>`





## SquareDeskpro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareDeskpro
include('fontawesome/Brands/SquareDeskpro')

' renders the element
SquareDeskpro('SquareDeskpro', 'Square Deskpro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareDeskpro
include('fontawesome/Brands/SquareDeskpro')

' renders the element
SquareDeskpro('SquareDeskpro', 'Square Deskpro', 'an optional tech label', 'an optional description')
@enduml
```

