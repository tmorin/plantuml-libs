# ItchIo


```text
fontawesome-5/Brands/ItchIo
```

```text
include('fontawesome-5/Brands/ItchIo')
```



| Illustration | ItchIo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/ItchIo.png) | ![illustration for ItchIo](../../fontawesome-5/Brands/ItchIo.Local.png) |




## ItchIo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ItchIo
include('fontawesome-5/Brands/ItchIo')

' renders the element
ItchIo('ItchIo', 'Itch Io', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ItchIo
include('fontawesome-5/Brands/ItchIo')

' renders the element
ItchIo('ItchIo', 'Itch Io', 'an optional tech label')
@enduml
```

