# Americanexpress


```text
simpleicons-6/A/Americanexpress
```

```text
include('simpleicons-6/A/Americanexpress')
```



| Illustration | Americanexpress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Americanexpress.png) | ![illustration for Americanexpress](../../simpleicons-6/A/Americanexpress.Local.png) |




## Americanexpress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Americanexpress
include('simpleicons-6/A/Americanexpress')

' renders the element
Americanexpress('Americanexpress', 'Americanexpress', 'an optional tech label')
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

' loads the Item which embeds the element Americanexpress
include('simpleicons-6/A/Americanexpress')

' renders the element
Americanexpress('Americanexpress', 'Americanexpress', 'an optional tech label')
@enduml
```

