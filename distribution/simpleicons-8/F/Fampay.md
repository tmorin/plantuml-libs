# Fampay


```text
simpleicons-8/F/Fampay
```

```text
include('simpleicons-8/F/Fampay')
```



| Illustration | Fampay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fampay.png) | ![illustration for Fampay](../../simpleicons-8/F/Fampay.Local.png) |




## Fampay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fampay
include('simpleicons-8/F/Fampay')

' renders the element
Fampay('Fampay', 'Fampay', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fampay
include('simpleicons-8/F/Fampay')

' renders the element
Fampay('Fampay', 'Fampay', 'an optional tech label', 'an optional description')
@enduml
```

