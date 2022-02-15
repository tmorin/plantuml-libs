# Keybase


```text
fontawesome-6/Brands/Keybase
```

```text
include('fontawesome-6/Brands/Keybase')
```



| Illustration | Keybase |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Keybase.png) | ![illustration for Keybase](../../fontawesome-6/Brands/Keybase.Local.png) |




## Keybase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Keybase
include('fontawesome-6/Brands/Keybase')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Keybase
include('fontawesome-6/Brands/Keybase')

' renders the element
Keybase('Keybase', 'Keybase', 'an optional tech label')
@enduml
```

