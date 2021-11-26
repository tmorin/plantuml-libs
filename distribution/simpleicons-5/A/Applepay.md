# Applepay


```text
simpleicons-5/A/Applepay
```

```text
include('simpleicons-5/A/Applepay')
```



| Illustration | Applepay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Applepay.png) | ![illustration for Applepay](../../simpleicons-5/A/Applepay.Local.png) |




## Applepay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Applepay
include('simpleicons-5/A/Applepay')

' renders the element
Applepay('Applepay', 'Applepay', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Applepay
include('simpleicons-5/A/Applepay')

' renders the element
Applepay('Applepay', 'Applepay', 'an optional tech label')
@enduml
```

