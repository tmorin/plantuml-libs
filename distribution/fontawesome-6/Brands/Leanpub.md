# Leanpub


```text
fontawesome-6/Brands/Leanpub
```

```text
include('fontawesome-6/Brands/Leanpub')
```



| Illustration | Leanpub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Leanpub.png) | ![illustration for Leanpub](../../fontawesome-6/Brands/Leanpub.Local.png) |




## Leanpub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Leanpub
include('fontawesome-6/Brands/Leanpub')

' renders the element
Leanpub('Leanpub', 'Leanpub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Leanpub
include('fontawesome-6/Brands/Leanpub')

' renders the element
Leanpub('Leanpub', 'Leanpub', 'an optional tech label', 'an optional description')
@enduml
```

