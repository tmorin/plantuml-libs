# Genderless


```text
fontawesome-5/Solid/Genderless
```

```text
include('fontawesome-5/Solid/Genderless')
```



| Illustration | Genderless |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Genderless.png) | ![illustration for Genderless](../../fontawesome-5/Solid/Genderless.Local.png) |




## Genderless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Genderless
include('fontawesome-5/Solid/Genderless')

' renders the element
Genderless('Genderless', 'Genderless', 'an optional tech label')
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

' loads the Item which embeds the element Genderless
include('fontawesome-5/Solid/Genderless')

' renders the element
Genderless('Genderless', 'Genderless', 'an optional tech label')
@enduml
```

