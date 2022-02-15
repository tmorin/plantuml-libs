# Amilia


```text
fontawesome-6/Brands/Amilia
```

```text
include('fontawesome-6/Brands/Amilia')
```



| Illustration | Amilia |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Amilia.png) | ![illustration for Amilia](../../fontawesome-6/Brands/Amilia.Local.png) |




## Amilia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Amilia
include('fontawesome-6/Brands/Amilia')

' renders the element
Amilia('Amilia', 'Amilia', 'an optional tech label')
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

' loads the Item which embeds the element Amilia
include('fontawesome-6/Brands/Amilia')

' renders the element
Amilia('Amilia', 'Amilia', 'an optional tech label')
@enduml
```

