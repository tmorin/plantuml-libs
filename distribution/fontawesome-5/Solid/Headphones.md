# Headphones


```text
fontawesome-5/Solid/Headphones
```

```text
include('fontawesome-5/Solid/Headphones')
```



| Illustration | Headphones |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Headphones.png) | ![illustration for Headphones](../../fontawesome-5/Solid/Headphones.Local.png) |




## Headphones

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Headphones
include('fontawesome-5/Solid/Headphones')

' renders the element
Headphones('Headphones', 'Headphones', 'an optional tech label')
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

' loads the Item which embeds the element Headphones
include('fontawesome-5/Solid/Headphones')

' renders the element
Headphones('Headphones', 'Headphones', 'an optional tech label')
@enduml
```

