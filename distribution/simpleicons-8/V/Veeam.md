# Veeam


```text
simpleicons-8/V/Veeam
```

```text
include('simpleicons-8/V/Veeam')
```



| Illustration | Veeam |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Veeam.png) | ![illustration for Veeam](../../simpleicons-8/V/Veeam.Local.png) |




## Veeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Veeam
include('simpleicons-8/V/Veeam')

' renders the element
Veeam('Veeam', 'Veeam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Veeam
include('simpleicons-8/V/Veeam')

' renders the element
Veeam('Veeam', 'Veeam', 'an optional tech label', 'an optional description')
@enduml
```

