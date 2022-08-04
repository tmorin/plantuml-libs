# Asda


```text
simpleicons-7/A/Asda
```

```text
include('simpleicons-7/A/Asda')
```



| Illustration | Asda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Asda.png) | ![illustration for Asda](../../simpleicons-7/A/Asda.Local.png) |




## Asda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Asda
include('simpleicons-7/A/Asda')

' renders the element
Asda('Asda', 'Asda', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Asda
include('simpleicons-7/A/Asda')

' renders the element
Asda('Asda', 'Asda', 'an optional tech label', 'an optional description')
@enduml
```

