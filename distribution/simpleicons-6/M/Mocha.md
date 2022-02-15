# Mocha


```text
simpleicons-6/M/Mocha
```

```text
include('simpleicons-6/M/Mocha')
```



| Illustration | Mocha |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mocha.png) | ![illustration for Mocha](../../simpleicons-6/M/Mocha.Local.png) |




## Mocha

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mocha
include('simpleicons-6/M/Mocha')

' renders the element
Mocha('Mocha', 'Mocha', 'an optional tech label')
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

' loads the Item which embeds the element Mocha
include('simpleicons-6/M/Mocha')

' renders the element
Mocha('Mocha', 'Mocha', 'an optional tech label')
@enduml
```

