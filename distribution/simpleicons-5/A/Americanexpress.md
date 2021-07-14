# Americanexpress


```text
simpleicons-5/A/Americanexpress
```

```text
include('simpleicons-5/A/Americanexpress')
```



| Illustration | Americanexpress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Americanexpress.png) | ![illustration for Americanexpress](../../simpleicons-5/A/Americanexpress.Local.png) |




## Americanexpress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Americanexpress
include('simpleicons-5/A/Americanexpress')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Americanexpress
include('simpleicons-5/A/Americanexpress')

' renders the element
Americanexpress('Americanexpress', 'Americanexpress', 'an optional tech label')
@enduml
```

