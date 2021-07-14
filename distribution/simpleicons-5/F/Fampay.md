# Fampay


```text
simpleicons-5/F/Fampay
```

```text
include('simpleicons-5/F/Fampay')
```



| Illustration | Fampay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fampay.png) | ![illustration for Fampay](../../simpleicons-5/F/Fampay.Local.png) |




## Fampay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fampay
include('simpleicons-5/F/Fampay')

' renders the element
Fampay('Fampay', 'Fampay', 'an optional tech label')
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

' loads the Item which embeds the element Fampay
include('simpleicons-5/F/Fampay')

' renders the element
Fampay('Fampay', 'Fampay', 'an optional tech label')
@enduml
```

