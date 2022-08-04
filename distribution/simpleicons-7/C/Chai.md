# Chai


```text
simpleicons-7/C/Chai
```

```text
include('simpleicons-7/C/Chai')
```



| Illustration | Chai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Chai.png) | ![illustration for Chai](../../simpleicons-7/C/Chai.Local.png) |




## Chai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chai
include('simpleicons-7/C/Chai')

' renders the element
Chai('Chai', 'Chai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chai
include('simpleicons-7/C/Chai')

' renders the element
Chai('Chai', 'Chai', 'an optional tech label', 'an optional description')
@enduml
```

