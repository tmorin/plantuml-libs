# Visa


```text
simpleicons-5/V/Visa
```

```text
include('simpleicons-5/V/Visa')
```



| Illustration | Visa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Visa.png) | ![illustration for Visa](../../simpleicons-5/V/Visa.Local.png) |




## Visa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Visa
include('simpleicons-5/V/Visa')

' renders the element
Visa('Visa', 'Visa', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Visa
include('simpleicons-5/V/Visa')

' renders the element
Visa('Visa', 'Visa', 'an optional tech label')
@enduml
```

