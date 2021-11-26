# Leanpub


```text
fontawesome-5/Brands/Leanpub
```

```text
include('fontawesome-5/Brands/Leanpub')
```



| Illustration | Leanpub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Leanpub.png) | ![illustration for Leanpub](../../fontawesome-5/Brands/Leanpub.Local.png) |




## Leanpub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Leanpub
include('fontawesome-5/Brands/Leanpub')

' renders the element
Leanpub('Leanpub', 'Leanpub', 'an optional tech label')
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

' loads the Item which embeds the element Leanpub
include('fontawesome-5/Brands/Leanpub')

' renders the element
Leanpub('Leanpub', 'Leanpub', 'an optional tech label')
@enduml
```

