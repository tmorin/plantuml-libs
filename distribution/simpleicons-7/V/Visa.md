# Visa


```text
simpleicons-7/V/Visa
```

```text
include('simpleicons-7/V/Visa')
```



| Illustration | Visa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Visa.png) | ![illustration for Visa](../../simpleicons-7/V/Visa.Local.png) |




## Visa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Visa
include('simpleicons-7/V/Visa')

' renders the element
Visa('Visa', 'Visa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Visa
include('simpleicons-7/V/Visa')

' renders the element
Visa('Visa', 'Visa', 'an optional tech label', 'an optional description')
@enduml
```

