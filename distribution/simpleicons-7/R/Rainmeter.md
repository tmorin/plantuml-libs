# Rainmeter


```text
simpleicons-7/R/Rainmeter
```

```text
include('simpleicons-7/R/Rainmeter')
```



| Illustration | Rainmeter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rainmeter.png) | ![illustration for Rainmeter](../../simpleicons-7/R/Rainmeter.Local.png) |




## Rainmeter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rainmeter
include('simpleicons-7/R/Rainmeter')

' renders the element
Rainmeter('Rainmeter', 'Rainmeter', 'an optional tech label')
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

' loads the Item which embeds the element Rainmeter
include('simpleicons-7/R/Rainmeter')

' renders the element
Rainmeter('Rainmeter', 'Rainmeter', 'an optional tech label')
@enduml
```

