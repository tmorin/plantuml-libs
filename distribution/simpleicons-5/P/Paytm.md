# Paytm


```text
simpleicons-5/P/Paytm
```

```text
include('simpleicons-5/P/Paytm')
```



| Illustration | Paytm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Paytm.png) | ![illustration for Paytm](../../simpleicons-5/P/Paytm.Local.png) |




## Paytm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Paytm
include('simpleicons-5/P/Paytm')

' renders the element
Paytm('Paytm', 'Paytm', 'an optional tech label')
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

' loads the Item which embeds the element Paytm
include('simpleicons-5/P/Paytm')

' renders the element
Paytm('Paytm', 'Paytm', 'an optional tech label')
@enduml
```

