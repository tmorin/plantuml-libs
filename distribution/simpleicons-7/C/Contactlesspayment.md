# Contactlesspayment


```text
simpleicons-7/C/Contactlesspayment
```

```text
include('simpleicons-7/C/Contactlesspayment')
```



| Illustration | Contactlesspayment |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Contactlesspayment.png) | ![illustration for Contactlesspayment](../../simpleicons-7/C/Contactlesspayment.Local.png) |




## Contactlesspayment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Contactlesspayment
include('simpleicons-7/C/Contactlesspayment')

' renders the element
Contactlesspayment('Contactlesspayment', 'Contactlesspayment', 'an optional tech label')
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

' loads the Item which embeds the element Contactlesspayment
include('simpleicons-7/C/Contactlesspayment')

' renders the element
Contactlesspayment('Contactlesspayment', 'Contactlesspayment', 'an optional tech label')
@enduml
```

