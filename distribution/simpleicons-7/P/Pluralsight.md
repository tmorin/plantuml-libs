# Pluralsight


```text
simpleicons-7/P/Pluralsight
```

```text
include('simpleicons-7/P/Pluralsight')
```



| Illustration | Pluralsight |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pluralsight.png) | ![illustration for Pluralsight](../../simpleicons-7/P/Pluralsight.Local.png) |




## Pluralsight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pluralsight
include('simpleicons-7/P/Pluralsight')

' renders the element
Pluralsight('Pluralsight', 'Pluralsight', 'an optional tech label')
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

' loads the Item which embeds the element Pluralsight
include('simpleicons-7/P/Pluralsight')

' renders the element
Pluralsight('Pluralsight', 'Pluralsight', 'an optional tech label')
@enduml
```

