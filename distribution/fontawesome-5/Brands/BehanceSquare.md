# BehanceSquare


```text
fontawesome-5/Brands/BehanceSquare
```

```text
include('fontawesome-5/Brands/BehanceSquare')
```



| Illustration | BehanceSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/BehanceSquare.png) | ![illustration for BehanceSquare](../../fontawesome-5/Brands/BehanceSquare.Local.png) |




## BehanceSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BehanceSquare
include('fontawesome-5/Brands/BehanceSquare')

' renders the element
BehanceSquare('BehanceSquare', 'Behance Square', 'an optional tech label')
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

' loads the Item which embeds the element BehanceSquare
include('fontawesome-5/Brands/BehanceSquare')

' renders the element
BehanceSquare('BehanceSquare', 'Behance Square', 'an optional tech label')
@enduml
```

