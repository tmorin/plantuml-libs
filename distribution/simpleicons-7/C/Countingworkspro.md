# Countingworkspro


```text
simpleicons-7/C/Countingworkspro
```

```text
include('simpleicons-7/C/Countingworkspro')
```



| Illustration | Countingworkspro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Countingworkspro.png) | ![illustration for Countingworkspro](../../simpleicons-7/C/Countingworkspro.Local.png) |




## Countingworkspro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Countingworkspro
include('simpleicons-7/C/Countingworkspro')

' renders the element
Countingworkspro('Countingworkspro', 'Countingworkspro', 'an optional tech label')
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

' loads the Item which embeds the element Countingworkspro
include('simpleicons-7/C/Countingworkspro')

' renders the element
Countingworkspro('Countingworkspro', 'Countingworkspro', 'an optional tech label')
@enduml
```

