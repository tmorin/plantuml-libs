# Leroymerlin


```text
simpleicons-6/L/Leroymerlin
```

```text
include('simpleicons-6/L/Leroymerlin')
```



| Illustration | Leroymerlin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Leroymerlin.png) | ![illustration for Leroymerlin](../../simpleicons-6/L/Leroymerlin.Local.png) |




## Leroymerlin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Leroymerlin
include('simpleicons-6/L/Leroymerlin')

' renders the element
Leroymerlin('Leroymerlin', 'Leroymerlin', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Leroymerlin
include('simpleicons-6/L/Leroymerlin')

' renders the element
Leroymerlin('Leroymerlin', 'Leroymerlin', 'an optional tech label')
@enduml
```

