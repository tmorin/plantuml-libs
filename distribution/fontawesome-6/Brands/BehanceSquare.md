# BehanceSquare


```text
fontawesome-6/Brands/BehanceSquare
```

```text
include('fontawesome-6/Brands/BehanceSquare')
```



| Illustration | BehanceSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/BehanceSquare.png) | ![illustration for BehanceSquare](../../fontawesome-6/Brands/BehanceSquare.Local.png) |




## BehanceSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BehanceSquare
include('fontawesome-6/Brands/BehanceSquare')

' renders the element
BehanceSquare('BehanceSquare', 'Behance Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BehanceSquare
include('fontawesome-6/Brands/BehanceSquare')

' renders the element
BehanceSquare('BehanceSquare', 'Behance Square', 'an optional tech label', 'an optional description')
@enduml
```

