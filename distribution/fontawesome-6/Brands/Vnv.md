# Vnv


```text
fontawesome-6/Brands/Vnv
```

```text
include('fontawesome-6/Brands/Vnv')
```



| Illustration | Vnv |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Vnv.png) | ![illustration for Vnv](../../fontawesome-6/Brands/Vnv.Local.png) |




## Vnv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Vnv
include('fontawesome-6/Brands/Vnv')

' renders the element
Vnv('Vnv', 'Vnv', 'an optional tech label')
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

' loads the Item which embeds the element Vnv
include('fontawesome-6/Brands/Vnv')

' renders the element
Vnv('Vnv', 'Vnv', 'an optional tech label')
@enduml
```

