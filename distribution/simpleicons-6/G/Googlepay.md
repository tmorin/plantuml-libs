# Googlepay


```text
simpleicons-6/G/Googlepay
```

```text
include('simpleicons-6/G/Googlepay')
```



| Illustration | Googlepay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlepay.png) | ![illustration for Googlepay](../../simpleicons-6/G/Googlepay.Local.png) |




## Googlepay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlepay
include('simpleicons-6/G/Googlepay')

' renders the element
Googlepay('Googlepay', 'Googlepay', 'an optional tech label')
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

' loads the Item which embeds the element Googlepay
include('simpleicons-6/G/Googlepay')

' renders the element
Googlepay('Googlepay', 'Googlepay', 'an optional tech label')
@enduml
```

