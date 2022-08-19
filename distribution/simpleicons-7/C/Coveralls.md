# Coveralls


```text
simpleicons-7/C/Coveralls
```

```text
include('simpleicons-7/C/Coveralls')
```



| Illustration | Coveralls |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Coveralls.png) | ![illustration for Coveralls](../../simpleicons-7/C/Coveralls.Local.png) |




## Coveralls

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Coveralls
include('simpleicons-7/C/Coveralls')

' renders the element
Coveralls('Coveralls', 'Coveralls', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coveralls
include('simpleicons-7/C/Coveralls')

' renders the element
Coveralls('Coveralls', 'Coveralls', 'an optional tech label', 'an optional description')
@enduml
```
