# Keybase


```text
fontawesome-5/Brands/Keybase
```

```text
include('fontawesome-5/Brands/Keybase')
```



| Illustration | Keybase |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Keybase.png) | ![illustration for Keybase](../../fontawesome-5/Brands/Keybase.Local.png) |




## Keybase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Keybase
include('fontawesome-5/Brands/Keybase')

' renders the element
Keybase('Keybase', 'Keybase', 'an optional tech label')
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

' loads the Item which embeds the element Keybase
include('fontawesome-5/Brands/Keybase')

' renders the element
Keybase('Keybase', 'Keybase', 'an optional tech label')
@enduml
```

