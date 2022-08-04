# InstagramSquare


```text
fontawesome-6/Brands/InstagramSquare
```

```text
include('fontawesome-6/Brands/InstagramSquare')
```



| Illustration | InstagramSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/InstagramSquare.png) | ![illustration for InstagramSquare](../../fontawesome-6/Brands/InstagramSquare.Local.png) |




## InstagramSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element InstagramSquare
include('fontawesome-6/Brands/InstagramSquare')

' renders the element
InstagramSquare('InstagramSquare', 'Instagram Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InstagramSquare
include('fontawesome-6/Brands/InstagramSquare')

' renders the element
InstagramSquare('InstagramSquare', 'Instagram Square', 'an optional tech label', 'an optional description')
@enduml
```

